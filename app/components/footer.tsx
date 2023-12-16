import Image from 'next/image';
import Link from 'next/link';

const MOCK = {
  leftLinks: ['Home', 'Chi siamo', 'Contatti', 'Lavora con noi'],
  centerLinks: [
    'Condizioni di vendita',
    'Pagamenti',
    'Certificazioni',
    'Sitemap',
  ],
  rightLinks: ['Privacy Policy', 'Cookie Policy', 'Credits'],
  brands: [
    'visa',
    'maestro',
    'paypal',
    'poste-pay',
    'carta-si',
    'visa-no-group',
    'master-card',
  ],
};

const linkStyle = 'font-[600] text-[14px] hover:text-red';

export default function Footer() {
  return (
    <footer className="w-full ">
      <div className="bg-[#CACACA] px-[104px] flex flex-row items-center h-[180px] ">
        <p className="w-[255px] text-[30px] leading-[30px] font-[800]">
          Iscriviti alla Newsletter
        </p>
        <div className="ml-[30px] flex flex-row items-center gap-2.5">
          <input
            placeholder="Indirizzo E-mail"
            className="border-[1px] border-[#cccccc] min-w-[269px]  rounded-[5px]  px-[10px] h-[50px]"
          />
          <button className="min-w-[269px] bg-black text-white h-[50px] font-[800] text-[15px]">
            ISCRIVITI
          </button>
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="check"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="check"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <Image
                  src="/icons/check-blue.svg"
                  alt="check"
                  width={20}
                  height={20}
                />
              </span>
            </label>
            <label className="font-[400] text-[13px]" htmlFor="check">
              Letta la Privacy Policy, accetto di ricevere la newsletter ai
              sensi del Regolamento UE 2016/679 (GDPR)
            </label>
          </div>
        </div>
      </div>
      <div className="px-[104px] flex flex-row justify-between items-center bg-[#EDEDED]  h-[182px] ">
        <div>
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={82.17}
            height={36.12}
          />
        </div>
        <nav className="flex flex-row  gap-[60px]">
          <ul>
            {MOCK.leftLinks.map((linkName) => (
              <li key={linkName} className={linkStyle}>
                <Link href="#">{linkName}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {MOCK.centerLinks.map((linkName) => (
              <li key={linkName} className={linkStyle}>
                <Link href="#">{linkName}</Link>
              </li>
            ))}
          </ul>
          <ul>
            {MOCK.rightLinks.map((linkName) => (
              <li key={linkName} className={linkStyle}>
                <Link href="#">{linkName}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="px-[104px] flex flex-row justify-between items-center py-[13px] border-b-[1px] border-gray">
        <ul className="flex flex-row items-center gap-[20px]">
          {MOCK.brands.map((brand) => (
            <li key={brand}>
              <Image
                src={`/icons/${brand}.svg`}
                alt="logo"
                width={50}
                height={26}
              />
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
      <div className="text-center">
        <p className="text-[13px] font-[500] py-[10px]">
          © 2023 Logo – Via delle Albere 13, 36045 Vicenza P.IVA 00589040245 –
          Registro Imprese di Vicenza: n. 00589040245 – Rea vi: 139951 Capitale
          sociale: € 10.000.000 i.v.
        </p>
      </div>
    </footer>
  );
}
