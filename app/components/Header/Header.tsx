import Link from "next/link";
import Image from "next/image";
const linkStyle = "";

export default function Header() {
  return (
    <header>
      <section className="flex flex-col ">
        <section className=" py-[10px] text-[14px] text-[black] font-[600] flex flex-row  justify-between  items-center border-b-2 border-gray">
          <section className="flex flex-row gap-[30px] w-full pl-[104px]">
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
        <section>center</section>
        <section>bottom</section>
      </section>
    </header>
  );
}
