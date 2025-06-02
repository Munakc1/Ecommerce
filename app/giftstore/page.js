import Image from 'next/image';

export default function GiftPage() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/gift.jpg"
        alt="Gaming Gift"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
}
