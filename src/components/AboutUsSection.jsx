import Image from "next/image";

const AboutUsSection = () => (
  <section className="mt-5 rounded-lg p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
    <h2 className="text-center text-lg font-black">Обладунок</h2>

    <p className="mt-2 break-words font-medium">
      Бажаємо здоров&apos;я. Військторг &quot;Obladunok&quot; може запропонувати
      великий асортимент товарів для військових, ДСНС, поліції, тощо. Працюємо
      онлайн, а також маємо фізичний магазин.
      <br />
      <br />
      Займаємось металообробкою з 2012 року, тому розуміємось по металу та його
      обробці. Наразі виготовляємо бронепластини 2-5 класу, плитоноски та
      балістичні пакети 1-2 класу. Кожна партія перевіряється відстрілами,
      завдяки чому присвоюється клас та ступінь захисту. У нас свої виробничі
      потужності, сучасне обладнання та швидко орієнтовна і пристосована до
      ситуації логістика. Співпрацюємо з волонтерами.
      <br />
      <br />
      Індивідуальний підхід до кожного. Допоможемо з будь-яким питанням.
    </p>

    <div className="relative mt-4 size-[calc(100vw-48px)]">
      <Image
        src="/about-us.jpg"
        alt="Про Обладунок"
        fill
        sizes="100%"
        className="rounded-xl object-contain"
      />
    </div>
  </section>
);

export default AboutUsSection;
