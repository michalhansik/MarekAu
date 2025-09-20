import type { GalleryImage, TimelineEvent } from './types';

export const SYSTEM_INSTRUCTION: string = `Wciel się w rolę Marka Aureliusza, rzymskiego cesarza i filozofa stoickiego. Odpowiadaj w sposób mądry, zwięzły i spokojny, tak jakbyś pisał w swoich 'Rozmyślaniach'. Używaj języka, który jest dostojny, ale zrozumiały dla współczesnego rozmówcy. Często wplataj w swoje odpowiedzi autentyczne cytaty i parafrazy z 'Rozmyślań'. Twoim celem jest dzielenie się mądrością stoicyzmu, pomaganie w znalezieniu spokoju wewnętrznego i perspektywy w obliczu życiowych wyzwań. Zwracaj się do użytkownika z szacunkiem, ale jako mędrzec i mentor. Odpowiadaj po polsku.`;

export const PRESET_QUESTIONS: string[] = [
  'Jak radzić sobie z przeciwnościami losu?',
  'Czym jest prawdziwe szczęście według stoików?',
  'Jak panować nad gniewem i innymi emocjami?',
  'Jaki jest sens życia?',
  'Jak odnaleźć spokój w chaotycznym świecie?',
  'Opowiedz mi o cnocie.',
  'Jak znaleźć sens w okrucieństwie wojny?',
  'Czy wojna jest kiedykolwiek sprawiedliwa?',
  'Jak zachować człowieczeństwo będąc żołnierzem?',
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Marcus_Aurelius_statue_in_the_Musei_Capitolini_in_Rome.jpg',
    alt: 'Pomnik konny Marka Aureliusza',
    caption: 'Pomnik konny Marka Aureliusza w Muzeach Kapitolińskich – symbol władzy i rozwagi.',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Marcus_Aurelius_MET_DP109217.jpg',
    alt: 'Popiersie Marka Aureliusza',
    caption: 'Marmurowe popiersie cesarza, ukazujące jego zamyśloną i filozoficzną naturę.',
  },
  {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Frontispiece_to_the_Meditations_of_Marcus_Aurelius_Wellcome_L0006368.jpg',
      alt: 'Strona tytułowa "Rozmyślań"',
      caption: '"Rozmyślania" – osobisty dziennik cesarza, który stał się fundamentem dla wielu pokoleń stoików.',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Forum_romanum_panorama.jpg',
    alt: 'Ruiny Forum Romanum',
    caption: 'Forum Romanum, serce starożytnego Rzymu, gdzie zapadały najważniejsze decyzje w państwie.',
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '121 n.e.',
    title: 'Narodziny',
    description: 'Marek Anniusz Werus, przyszły cesarz Marek Aureliusz, przychodzi na świat w Rzymie.',
  },
  {
    year: '138 n.e.',
    title: 'Adopcja przez Antonina Piusa',
    description: 'Na polecenie cesarza Hadriana, zostaje adoptowany przez swojego następcę, Antonina Piusa, co wyznacza go jako przyszłego władcę.',
  },
  {
    year: '161 n.e.',
    title: 'Objęcie tronu',
    description: 'Po śmierci Antonina Piusa, Marek Aureliusz zostaje cesarzem rzymskim, dzieląc władzę ze swoim adoptowanym bratem, Lucjuszem Werusem.',
  },
  {
    year: '161-166 n.e.',
    title: 'Wojna z Partami',
    description: 'Imperium prowadzi zwycięską wojnę z Partią na wschodzie, jednak powracające wojska przywożą ze sobą zarazę.',
  },
  {
    year: '165-180 n.e.',
    title: 'Zaraza Antoninów',
    description: 'Epidemia, prawdopodobnie ospy, dziesiątkuje populację Imperium, powodując kryzys demograficzny i gospodarczy.',
  },
  {
    year: '166-180 n.e.',
    title: 'Wojny markomańskie',
    description: 'Ciężkie i długotrwałe kampanie wojenne przeciwko plemionom germańskim i sarmackim na granicy Dunaju. W tym okresie powstaje większość "Rozmyślań".',
  },
  {
    year: '175 n.e.',
    title: 'Rebelia Awidiusza Kasjusza',
    description: 'Jeden z czołowych wodzów, po fałszywej wieści o śmierci cesarza, ogłasza się imperatorem. Rebelia szybko upada.',
  },
  {
    year: '180 n.e.',
    title: 'Śmierć',
    description: 'Marek Aureliusz umiera w Vindobonie (dzisiejszy Wiedeń) podczas kampanii wojennej. Jego następcą zostaje syn, Kommodus.',
  },
];