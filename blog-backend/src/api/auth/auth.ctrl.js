import Joi from '@hapi/joi';
import User from '../../models/user';

/*
 회원가입
 POST /api/auth/register
 {
     username: 'sbshin',
     password: 'pw123'
 }
*/

export const register = async (ctx) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const { username, password } = ctx.request.body;
  try {
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409;
      return;
    }
    const user = new User({
      username,
    });
    await user.setPassword(password);
    await user.save();
    ctx.body = user.serialize();
  } catch (err) {
    ctx.throw(500, err);
  }
};

/*
 로그인
 POST /api/auth/login
 {
     username: 'sbshin',
     password: 'pw123'
 }
*/

export const login = async (ctx) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByUsername(username);
    if (!user) {
      ctx.staus = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();
  } catch (err) {
    ctx.throw(500, err);
  }
};

export const check = async (ctx) => {
  // 로그인 상태 확인
};

export const logout = async (ctx) => {
  // 로그아웃
};
