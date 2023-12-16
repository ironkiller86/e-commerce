import Image from 'next/image';
import Link from 'next/link';

const isNew = true;

export default function Card() {
  return (
    <article className="w-[289px] bg-white shadow-[0px_5px_10px_0px_rgba(0,0,0,0.15)]">
      <Link href="">
        <div className="flex flex-col relative">
          <Image
            src="https://i.imgur.com/BG8J0Fj.jpg"
            alt="item"
            width={289}
            height={220}
          />
          <div className="mt-[20px] text-center p-4">
            <p className="text-[18px] font-[700]">titolo</p>
            <p className="font-[500] my-[20px] text-[#4A4A4A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[20px] font-[600] text-[#E32119]">320 €</p>
          </div>
          {isNew && (
            <div className="absolute top-[267px] left-1 text-[12px] font-[600] bg-white px-[10px]">
              Novita
            </div>
          )}
          <div className="absolute top-[5px] right-[5px] z-10">
            <button>
              <Image
                src="/icons/heart-round.svg"
                alt="heart-round icon"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
}
