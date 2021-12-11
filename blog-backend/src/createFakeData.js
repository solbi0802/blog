import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id elit et nibh venenatis tristique a nec dolor. Mauris nunc sapien, interdum quis neque ut, mattis consectetur lectus. Integer mattis tincidunt vestibulum. Sed volutpat ex gravida, dictum ligula non, ultricies purus. Aenean vel porta enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget est eget metus auctor volutpat in nec quam. Cras mollis ligula augue, non gravida ligula elementum sed. Integer iaculis nunc sed metus malesuada mollis. Proin eu turpis est. Suspendisse vulputate enim vitae diam cursus maximus. Ut varius, dolor vel tempus fermentum, odio mauris posuere nulla, id vulputate urna est nec lectus. Donec non arcu massa. Donec at lorem velit. Curabitur sed fringilla purus, vitae luctus eros. Nulla efficitur eros vel ornare mollis. Vivamus convallis, ligula vel tincidunt molestie, eros tellus dictum tortor, nec hendrerit purus erat sed tortor. Nullam sollicitudin sodales maximus. Integer et nibh ornare lectus hendrerit efficitur eu non leo. Maecenas pretium lacinia lorem eu fringilla. Suspendisse potenti. Nullam in viverra diam. Ut in sagittis augue. Aenean eleifend vitae libero in mattis. Quisque ut dui ac tortor pellentesque vehicula tempor non justo. Sed accumsan rutrum nulla, quis dignissim.',
    tags: ['가짜', '데이터', 'fake'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
