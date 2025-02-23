import { Image } from "@heroui/react";

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
          width="232"
          height="290"
          alt="Image 01"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
          width="232"
          height="290"
          alt="Image 02"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
          width="232"
          height="174"
          alt="Image 03"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
          width="232"
          height="155"
          alt="Image 04"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
          width="232"
          height="349"
          alt="Image 05"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
          width="232"
          height="250"
          alt="Image 06"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
          width="232"
          height="349"
          alt="Image 07"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
          width="232"
          height="155"
          alt="Image 08"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
          width="232"
          height="250"
          alt="Image 09"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
          width="232"
          height="290"
          alt="Image 10"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
          width="232"
          height="155"
          alt="Image 11"
        />
        <Image
          className="w-full rounded-xl shadow"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
          width="232"
          height="309"
          alt="Image 12"
        />
      </div>
    </div>
  );
}

export default HomePage;
