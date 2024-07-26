import Image from "next/image";

const socials = [
  { url: "/socials/instagram.svg", alt: "Instagram" },
  { url: "/socials/telegram.svg", alt: "Telegram" },
  { url: "/socials/viber.svg", alt: "Viber" },
  { url: "/socials/whatsapp.svg", alt: "WhatsApp" },
];

const Footer = () => (
  <footer className="translate-y-20 space-y-4 border-t-2 px-6 pt-6">
    {/* Phone */}
    <div>
      <h6 className="font-bold">Контактний телефон:</h6>
      <a href="tel:+380968381263">+380 (96) 838-12-63</a>
    </div>

    {/* Email */}
    <div>
      <h6 className="font-bold">Електронна пошта:</h6>
      <a href="mailto:obladunokk@gmail.com">obladunokk@gmail.com</a>
    </div>

    {/* Socials */}
    <div>
      <h6 className="font-bold">Соціальні мережі:</h6>
      <div className="mt-1 flex gap-3">
        {socials.map((item) => (
          <Image
            key={item.alt}
            src={item.url}
            alt={item.alt}
            width={24}
            height={24}
            className="cursor-pointer"
          />
        ))}
      </div>
    </div>

    {/* Address */}
    <div>
      <h6 className="font-bold">Години роботи:</h6>
      <div className="mt-1 flex flex-col gap-1">
        <span>Понеділок - П&apos;ятниця: 09:00 - 18:00</span>
        <span>Субота: 10:00 - 16:00</span>
        <span>Неділя: Вихідний</span>
      </div>
    </div>

    {/* Address */}
    <div>
      <h6 className="font-bold">Адреса:</h6>
      <span>вулиця Бориспільська, 9, корпус 87, Київ, 02000</span>

      <div className="mb-6 mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10166.68084267218!2d30.65072089776298!3d50.42861584068392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5491b7c26cd%3A0xa420e47369ea549c!2z0JLRltC50YHRjNC60YLQvtGA0LMgT2JsYWR1bm9r!5e0!3m2!1sru!2sua!4v1721914398381!5m2!1sru!2sua"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    {/* Copyright */}
    <div className="-ml-6 flex w-screen flex-col gap-1 bg-[#E2E8F0] py-4 text-center text-xs">
      <span>© 2024 Obladunok</span>
      <span>Всі права захищено.</span>
    </div>
  </footer>
);

export default Footer;
