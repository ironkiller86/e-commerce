import Link from 'next/link';
import Image from 'next/image';

const MOCK = {
  topLinks: ['Chi Siamo', 'Community', 'Brand'],
  targetList: ['DONNA', 'UOMO', 'BAMBINI', 'TUTTI GLI ARTICOLI'],
  leftLinks: ['user', 'heart', 'cart'],
};

export default function Header() {
  return (
    <header>
      <nav className="flex flex-col ">
        <div className=" py-[10px] text-[14px] text-[black] font-[600] border-b-[1px] border-gray">
          <div className="px-[104px]  flex flex-row  justify-between  items-center">
            <ul className="flex flex-row gap-[30px]">
              {MOCK.topLinks.map((linkNme) => (
                <li className="hover:text-red" key={linkNme}>
                  <Link href="#">{linkNme}</Link>
                </li>
              ))}
            </ul>
            <div>
              <button className="text-[13px] text-[#4a4a4a] font-[500] flex flex-row items-center gap-[5px]  hover:cursor-pointer">
                <p>ITA</p>
                <Image
                  src="/icons/arrow-down.svg"
                  alt="down arrow"
                  width={13.6}
                  height={8}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="px-[104px] py-[30px] flex flex-row  justify-between  items-center border-b-[1px] border-gray">
          <div>
            <Link href="/">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                width={82.17}
                height={36.12}
              />
            </Link>
          </div>
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
          <ul className="flex flex-row  items-center gap-5">
            {MOCK.leftLinks.map((link) => (
              <li key={link}>
                <Link href="#">
                  <Image
                    className="hover:stroke-red"
                    src={`/icons/${link}.svg`}
                    alt={link}
                    width={24.8}
                    height={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-[104px] border-b-[1px] border-gray">
          <ul className="flex flex-row  gap-10   h-[45px] items-center">
            {MOCK.targetList.map((target) => (
              <li
                key={target}
                className="flex items-center border-t-[3px] border-t-white h-full text-[13px] font-[800]  hover:text-red hover:border-b-[3px] border-b-red cursor-pointer"
              >
                {target}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
