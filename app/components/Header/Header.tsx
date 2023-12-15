import Link from 'next/link';
import Image from 'next/image';
const linkStyle = '';

export default function Header() {
  return (
    <header>
      <section className="flex flex-col ">
        <section className=" py-[10px] text-[14px] text-[black] font-[600] border-b-[1px] border-gray">
          <section className="px-[104px]  flex flex-row  justify-between  items-center">
            <section className="flex flex-row gap-[30px]">
              <Link href="#">Chi Siamo</Link>
              <Link href="#">Community</Link>
              <Link href="#">Brand</Link>
            </section>
            <section>
              <button className="text-[13px] text-[#4a4a4a] font-[500] flex flex-row items-center gap-[5px]  hover:cursor-pointer">
                <p>ITA</p>
                <Image
                  src="/icons/arrow-down.svg"
                  alt="down arrow"
                  width={13.6}
                  height={8}
                />
              </button>
            </section>
          </section>
        </section>
        <section className="px-[104px] py-[30px] flex flex-row  justify-between  items-center border-b-[1px] border-gray">
          <section>
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={82.17}
              height={36.12}
            />
          </section>
          <span className="relative">
            <input className="border-[1px] border-[#cccccc] w-[400px] rounded-[5px] h-10 pl-[10px] pr-10" />
            <Image
              src="/icons/search.svg"
              alt="user"
              width={20}
              height={20}
              className="absolute  top-2/4 right-3 -translate-y-2/4"
            />
          </span>
          <section className="flex flex-row  items-center gap-5">
            <Link href="#">
              <Image
                src="/icons/user.svg"
                alt="user"
                width={24.8}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/heart.svg"
                alt="user"
                width={24.8}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/cart.svg"
                alt="user"
                width={24.8}
                height={24}
              />
            </Link>
          </section>
        </section>
        <section className="px-[104px] py-[15px] border-b-[1px] border-gray">
          <section>test</section>
        </section>
      </section>
    </header>
  );
}
