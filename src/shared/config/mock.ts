import {
  LocationPageContent,
  LocationContentType,
  LocationPreview,
} from "@entities/location";

export const locationsMock: LocationPreview[] = [
  {
    id: "1",
    title: "Прекрасные пейзажи",
    description: "Невероятные виды на закат.",
    date: "01.01.2025",
    image_url:
      "https://i.pinimg.com/originals/28/06/b2/2806b25b863aa77b57e7832f70119caf.jpg",
  },
  {
    id: "2",
    title: "Исторические места",
    description: "Откройте для себя древние руины.",
    date: "02.01.2025",
    image_url:
      "https://i.pinimg.com/originals/28/06/b2/2806b25b863aa77b57e7832f70119caf.jpg",
  },
  {
    id: "3",
    title: "Современные мегаполисы",
    description: "Увидеть всю красоту городов.",
    date: "03.01.2025",
    image_url:
      "https://i.pinimg.com/originals/28/06/b2/2806b25b863aa77b57e7832f70119caf.jpg",
  },
  {
    id: "4",
    title: "Горы и природа",
    description: "Пешие прогулки среди горных троп.",
    date: "04.01.2025",
    image_url:
      "https://i.pinimg.com/originals/28/06/b2/2806b25b863aa77b57e7832f70119caf.jpg",
  },
  {
    id: "5",
    title: "Культурные фестивали",
    description: "Погрузитесь в мир культуры.",
    date: "05.01.2025",
    image_url:
      "https://i.pinimg.com/originals/28/06/b2/2806b25b863aa77b57e7832f70119caf.jpg",
  },
  // Добавлено еще 25 объектов для разнообразия
  ...Array.from({ length: 25 }, (_, index) => ({
    id: (6 + index).toString(),
    title: `Локация ${index + 1}`,
    description: `Описание локации ${index + 1}`,
    date: `2025-01-${(index + 6).toString().padStart(2, "0")}`,
    image_url:
      "https://i.pinimg.com/originals/28/06/b2/2806b25b863aa77b57e7832f70119caf.jpg",
  })),
];

export const locationInfoMock: LocationPageContent = {
  id: "123456",
  title: "Нефрит кўли",
  description:
    "Тошкент вилояти, Бўстонлиқ тумани худудига кирувчи кўллардан бири саналади. Урунгач қишлоғидан узоқ бўлмаган масофадаги Угам-Чотқол қўриқхонасида сув омборлари жойлашган. Кўл илк бор 2016 йилда саёҳатчи блогерлар томонидан ёритиб берилган. Аммо уни кўриш учун сайёҳлар оқими карантиндан кейин кўпая бошлаган. Кўл сувининг аксланиши нефрит тоши рангида бўлгани боис унга шундай ном берилган. Кўл табиий ҳавзалар билан икки қисм (кичик ва катта)га ажратилади ва Урунғоч қишлоғига яқин жойлашгани боис шу қишлоқ номи билан ҳам машҳур. Кичик кўл мавсумий бўлганлиги сабаб бориш учун қулай вақт апрелдан то августгача ҳисобланади.",
  date: "22.09.2024",
  image_url:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d02a77c8-2407-4dc3-9e0f-5f7ca8307262/dh5jjxw-399318eb-a9f4-4b4e-8aeb-60059d68daf4.png/v1/fill/w_1095,h_730,q_70,strp/grand_teton_national_park__wyoming_by_ajolley785727_dh5jjxw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODUzIiwicGF0aCI6IlwvZlwvZDAyYTc3YzgtMjQwNy00ZGMzLTllMGYtNWY3Y2E4MzA3MjYyXC9kaDVqanh3LTM5OTMxOGViLWE5ZjQtNGI0ZS04YWViLTYwMDU5ZDY4ZGFmNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hYLyc5usgrQuJh5w-w3t0W309CcDayD6mc0OnP12O8w",
  content: [
    {
      type: LocationContentType.photo,
      content:
        "https://yandex-images.clstorage.net/PH9GG7365/c7feb048B/7tJQ2eVFjgNQYjHFOZTCZHHhA13Tk4PuLQfzd_m6XQOY74qy6nlAQgN05nrO16ZzTvRUuxmTuU_plNjGJfK2JL_aTITUWIp2KS8tnGm0znB5lHZRl-Lr_1lu-gaJ6mBfuaeiSgOkjZOagU7GVzpHUi-pHL4h4oxiUDHdJ7F-LoFCGgCdhcXvWwzqWO3lKDKs2aybWVv-fxMdF_IWrZc0_qyGxr63hIWXLoW27m8qn7IzwcwmzAZIRjQAAT_NXlbVfsIIsdWdh_v0OqjJ9aDO6FlI_7kLdo_f_Tf-xtmDzEbg1jqaP8QpJzp9Hu73gnuSez2w9kiabNKkQPVnSb5yHU5CzLlNkfejXNpU4Y0AMmC1pBtFe9pvH7ljfl6JS4RiUCom-jtsOXuO5T66I1YrOrvdzGZw_tQG5CQR48FG0hWCtszhOSGLX8CWpOVtXKJIyQy_cffeg0P5Z1bShZuo2iQu_gbz-A0rToFiBvtCw4qD1bz6dIbsNuj0aYvNSnr9Ij40FeWJ9z-oQnjRNSg6wG0QZ7WTeuPzZf-KCiVLTEosqt72N7gtfzalElrPtjMmzy006nzygD6YhAk_RUaqrY4uRKUx1XtrtFbMmZU4Nix95Hd1nyrfA_GHdroZA6jy1Na-GpuMUa86kYIqE_77ci-xWKaobnAqSCgZn1GyVrkuuvyB1YUnUwTO0D3VTPZEybz_9Yf6d-v5r36mHRuUunC-0qJbnElfbp1KbsPa074jWZCipJLwhjQkQddB5lqlXo5A7a1Bl2M0kqTFhTCefC0Mi6lr_lsPnSv2JtU3yKZU9soadzy12zblgsZbTnfuQy1oZsRWCOr4UE1n4dL6_SJi4L0lVQfbSBJc7UnYYlyxGPtd8ybfZ7UbKsbho7yiRGqqetOUhf-mZWIKm163svNVlJ6YjtSaYFRhr-UiGn2-ojDFaSkDn3xOVOUJHFI0qWgD1WdGt0cxj4YmGT8E",
    },
    {
      type: LocationContentType.text,
      content:
        "Ундан кейин кўл суви камайиб, тошлар орасидан оқиб кетади. Катта кўл эса йил бўйи мавжуд, хаттоки, қишда кўлнинг музлаганига гувоҳ бўлиш мумкин. Кўлнинг суви шу даражада шаффофки, тубида тошлар кўриниб туради. Кўл атрофи оилавий дам олиш ва чўмилиш учун жуда қулай. Бироқ сув ниҳоятда совуқ. Баланд тоғлар ва ноқулай йўл туфайли кўлларга етиб бориш қийинчилик туғдирса ҳам Нефрит кўллари ва уни ўраб турган гўзал табиат бунга арзийди. Саёҳатчиларни кўлларнинг таърифлаб бўлмайдиган гўзаллиги ҳайратга солади. Бу ерда улар табиатнинг ҳақиқий экзотикаси, тоза хаво ва сокинликдан завқланишади, тоғдан оқиб тушаётган энг тоза сув, кўм-кўк майсалар руҳингизга тинчлик ва осойишталик ҳадя қилади. ",
    },
    {
      type: LocationContentType.video,
      content: "https://yandex.uz/video/preview/14665023901179702092",
    },
    {
      type: LocationContentType.text,
      content:
        "Ундан кейин кўл суви камайиб, тошлар орасидан оқиб кетади. Катта кўл эса йил бўйи мавжуд, хаттоки, қишда кўлнинг музлаганига гувоҳ бўлиш мумкин. Кўлнинг суви шу даражада шаффофки, тубида тошлар кўриниб туради. Кўл атрофи оилавий дам олиш ва чўмилиш учун жуда қулай. Бироқ сув ниҳоятда совуқ. Баланд тоғлар ва ноқулай йўл туфайли кўлларга етиб бориш қийинчилик туғдирса ҳам Нефрит кўллари ва уни ўраб турган гўзал табиат бунга арзийди. Саёҳатчиларни кўлларнинг таърифлаб бўлмайдиган гўзаллиги ҳайратга солади. Бу ерда улар табиатнинг ҳақиқий экзотикаси, тоза хаво ва сокинликдан завқланишади, тоғдан оқиб тушаётган энг тоза сув, кўм-кўк майсалар руҳингизга тинчлик ва осойишталик ҳадя қилади. ",
    },
    {
      type: LocationContentType.photo,
      content:
        "https://i.pinimg.com/originals/c5/2f/b0/c52fb0e9de148e812c542414ee46206e.jpg",
    },
    {
      type: LocationContentType.video,
      content: "https://www.youtube.com/live/VKOBAjZiXwQ?si=XbsuV55xlcNUzgbE",
    },
    {
      type: LocationContentType.photo,
      content:
        "https://w.forfun.com/fetch/2a/2ad97110d83b4634a75c96967c91411b.jpeg",
    },
    {
      type: LocationContentType.video,
      content: "https://www.youtube.com/live/VKOBAjZiXwQ?si=XbsuV55xlcNUzgbE",
    },
    {
      type: LocationContentType.photo,
      content:
        "https://avatars.mds.yandex.net/i?id=c2d6a72d7e21abc37fa8b5e40041a3bf5f1c18d7-8797427-images-thumbs&ref=rim&n=33&w=480&h=317",
    },
    {
      type: LocationContentType.video,
      content: "https://www.youtube.com/live/VKOBAjZiXwQ?si=XbsuV55xlcNUzgbE",
    },
    {
      type: LocationContentType.photo,
      content:
        "https://i.pinimg.com/originals/f3/ca/8b/f3ca8b3588ca422510009b675943a660.jpg",
    },
    {
      type: LocationContentType.video,
      content: "https://www.youtube.com/live/VKOBAjZiXwQ?si=XbsuV55xlcNUzgbE",
    },
    {
      type: LocationContentType.photo,
      content:
        "https://i.pinimg.com/originals/24/97/12/2497128c6cf4e7b7a686c94a5cf09e31.jpg",
    },
    {
      type: LocationContentType.video,
      content: "https://www.youtube.com/live/VKOBAjZiXwQ?si=XbsuV55xlcNUzgbE",
    },
  ],
};
