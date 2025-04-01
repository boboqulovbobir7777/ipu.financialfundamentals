import silabus from "../../resource/silabus";

export default function AboutScience() {
  return (
    <div className="flex flex-col items-center gap-5 text-center text-white py-20">
      <h1 className="text-3xl font-semibold">Moliya asoslari</h1>
      <p className="max-w-[900px] text-xl max-[425px]:text-base select-none">
        Moliya – bu davlat, korxonalar va jismoniy shaxslarning pul
        mablag‘larini shakllantirish, taqsimlash va ishlatish jarayonlarini
        o‘rganuvchi iqtisodiy kategoriya. U jamiyatning iqtisodiy tizimida muhim
        o‘rin egallaydi va xo‘jalik yurituvchi subyektlar o‘rtasidagi pul
        munosabatlarini tartibga soladi.
      </p>
      <a
        href={silabus}
        className="block p-[12px_40px] bg-[#23d59c] rounded-[25px] duration-300 min-md:hover:bg-[#ffee00] active:bg-[#00cbff]"
        target="_blank"
      >
        Silabus
      </a>
    </div>
  );
}
