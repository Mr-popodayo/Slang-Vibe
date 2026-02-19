import { SlangItem } from "@/types";
import { newSlangData } from "./newSlangData";
import { newSlangData2 } from "./newSlangData2";
import { newSlangData3 } from "./newSlangData3";

const originalData: SlangItem[] = [
    {
        id: "1",
        term: "Type shi",
        category: "Slang",
        definition: "Short for 'Type of shit', meaning 'That's the vibe' or 'Exactly'.",
        origin: "Atlanta hip-hop culture, popularized on TikTok around 2022.",
        frequency: 5,
        usageWarning: "Risky",
        examples: [
            "\"I'm thinking of grabbing boba after class.\" \"Type shi.\"",
            "\"We should hit the beach this weekend.\" \"Type shi, let's go.\""
        ],
        tags: ["GenZ", "Chat", "Casual"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "2",
        term: "No cap",
        category: "Slang",
        definition: "For real, not lying. Used to emphasize truthfulness.",
        origin: "African American Vernacular English (AAVE), popularized by Atlanta rap scene.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"That movie was fire, no cap.\"",
            "\"No cap, this is the best pizza I've ever had.\""
        ],
        tags: ["GenZ", "SocialMedia", "Casual"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "3",
        term: "Slay",
        category: "Slang",
        definition: "To do something exceptionally well; to look amazing or perform outstandingly.",
        origin: "Drag and ballroom culture of the 1980s–90s, mainstream via social media.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"You absolutely slayed that presentation!\"",
            "\"She walked in and slayed the whole room.\""
        ],
        tags: ["GenZ", "SocialMedia", "Fashion"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "4",
        term: "It's giving…",
        category: "Slang",
        definition: "Used to describe the vibe or energy something is projecting.",
        origin: "Ballroom culture, widely adopted on TikTok and Twitter.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"That outfit? It's giving CEO energy.\"",
            "\"This café is giving cozy winter vibes.\""
        ],
        tags: ["GenZ", "SocialMedia", "Fashion"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "5",
        term: "Bussin",
        category: "Slang",
        definition: "Extremely good, usually referring to food but can apply to anything excellent.",
        origin: "African American Vernacular English, viral via TikTok food reviews.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"This ramen is bussin, you gotta try it.\"",
            "\"The new album? Bussin from track one.\""
        ],
        tags: ["GenZ", "Food", "SocialMedia"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "6",
        term: "Bet",
        category: "Slang",
        definition: "Agreement or confirmation, similar to 'okay' or 'sounds good'.",
        origin: "AAVE, widely used since the 1990s, resurgence on social media.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"Meet you at 8?\" \"Bet.\"",
            "\"I'll cover your shift tomorrow.\" \"Bet, thanks.\""
        ],
        tags: ["Chat", "Casual", "GenZ"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "7",
        term: "Rizz",
        category: "Slang",
        definition: "Charisma and charm, especially the ability to attract romantic interest.",
        origin: "Coined by YouTuber Kai Cenat, Oxford Word of the Year 2023.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"He's got insane rizz, everyone loves him.\"",
            "\"She rizzed him up in two sentences flat.\""
        ],
        tags: ["GenZ", "Romance", "SocialMedia"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "8",
        term: "Brainrot",
        category: "Slang",
        definition: "Content so addictive and mind-numbing that it feels like it's rotting your brain.",
        origin: "Internet culture, used to describe excessive consumption of short-form video.",
        frequency: 4,
        usageWarning: "Caution",
        examples: [
            "\"I've been watching Shorts for 3 hours. Pure brainrot.\"",
            "\"The brainrot is real with these memes.\""
        ],
        tags: ["GenZ", "Internet", "SocialMedia"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "9",
        term: "Ate and left no crumbs",
        category: "Slang",
        definition: "Did something so perfectly that there's nothing left to criticize.",
        origin: "Drag and stan culture, popularized on Twitter and TikTok.",
        frequency: 3,
        usageWarning: "Safe",
        examples: [
            "\"Her performance at the Grammys? She ate and left no crumbs.\"",
            "\"The director ate with that final scene.\""
        ],
        tags: ["SocialMedia", "Fashion", "Entertainment"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "10",
        term: "Main character energy",
        category: "Slang",
        definition: "Acting or feeling like you're the protagonist of a movie — living boldly and unapologetically.",
        origin: "TikTok trend from 2020, rooted in self-empowerment culture.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"Walking through the airport with headphones on — main character energy.\"",
            "\"She's got total main character energy today.\""
        ],
        tags: ["SocialMedia", "GenZ", "Lifestyle"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "11",
        term: "Break the ice",
        category: "Idiom",
        definition: "To initiate conversation in an awkward or tense social situation.",
        origin: "Derived from the practice of breaking ice to allow ships to pass, used since the 17th century.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"He told a joke to break the ice at the meeting.\"",
            "\"The team-building exercise was perfect for breaking the ice.\""
        ],
        tags: ["Office", "Social", "Classic"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "12",
        term: "Spill the tea",
        category: "Idiom",
        definition: "To share gossip or reveal exciting, often secret, information.",
        origin: "Drag culture, mainstream via reality TV and social media in the 2010s.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"Girl, spill the tea — what happened at the party?\"",
            "\"She's about to spill the tea on that whole situation.\""
        ],
        tags: ["SocialMedia", "GenZ", "Casual"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "13",
        term: "Burn bridges",
        category: "Idiom",
        definition: "To destroy a relationship or connection, making it impossible to return.",
        origin: "Military strategy — literally burning bridges to prevent enemy retreat.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"Don't burn bridges with your old employer; you might need a reference.\"",
            "\"He burned all his bridges when he quit without notice.\""
        ],
        tags: ["Office", "Relationships", "Classic"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "14",
        term: "Bite the bullet",
        category: "Idiom",
        definition: "To endure a painful or difficult situation with courage.",
        origin: "Wartime practice of biting a bullet during surgery without anesthesia.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"I have to bite the bullet and have that difficult conversation.\"",
            "\"Just bite the bullet and submit the application.\""
        ],
        tags: ["Office", "Classic", "Motivation"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "15",
        term: "Under the weather",
        category: "Idiom",
        definition: "Feeling slightly ill or unwell.",
        origin: "Nautical origin — sailors going below deck during storms to feel better.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"I'm feeling a bit under the weather, so I'll skip the gym.\"",
            "\"She's been under the weather all week with a cold.\""
        ],
        tags: ["Everyday", "Classic", "Health"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "16",
        term: "Low-key",
        category: "Slang",
        definition: "Secretly, modestly, or to a small degree. The opposite of 'high-key'.",
        origin: "Hip-hop culture, widespread on social media since the mid-2010s.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"I low-key want to skip the party tonight.\"",
            "\"That song is low-key the best on the album.\""
        ],
        tags: ["GenZ", "Chat", "Casual"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "17",
        term: "Ghosting",
        category: "Slang",
        definition: "Suddenly cutting off all communication with someone without explanation.",
        origin: "Dating culture, became mainstream term around 2015.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"He ghosted me after three dates — zero warning.\"",
            "\"Please don't ghost the recruiter; just decline politely.\""
        ],
        tags: ["Romance", "SocialMedia", "GenZ"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "18",
        term: "Flex",
        category: "Slang",
        definition: "To show off, boast, or display something impressive.",
        origin: "Hip-hop culture — flexing muscles evolved to flexing wealth and success.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"Nice car — are you flexing on us?\"",
            "\"She was flexing her new sneakers at school.\""
        ],
        tags: ["GenZ", "SocialMedia", "Casual"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "19",
        term: "The ball is in your court",
        category: "Idiom",
        definition: "It's your turn to take action or make a decision.",
        origin: "Tennis metaphor — the ball is literally on your side of the court.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"I've sent the proposal. The ball is in your court now.\"",
            "\"We've made our offer — the ball is in their court.\""
        ],
        tags: ["Office", "Classic", "Business"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "20",
        term: "Hit different",
        category: "Slang",
        definition: "Something that feels uniquely impactful or emotionally resonant.",
        origin: "AAVE — used online since around 2019 to express unique emotional impact.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"Coffee at 6 AM on a Sunday just hits different.\"",
            "\"This song hits different when you're driving at night.\""
        ],
        tags: ["GenZ", "SocialMedia", "Casual"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "21",
        term: "GOAT",
        category: "Slang",
        definition: "Greatest Of All Time — used to praise someone as the best in their field.",
        origin: "Muhammad Ali was one of the first to claim the title. Acronym popularized in hip-hop.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"Messi is the GOAT, no debate.\"",
            "\"Grandma's cookies? She's the GOAT.\""
        ],
        tags: ["Sports", "SocialMedia", "GenZ"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "22",
        term: "Caught red-handed",
        category: "Idiom",
        definition: "Caught in the act of doing something wrong or illegal.",
        origin: "Scottish origin — literally having blood-red hands after committing a crime.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"He was caught red-handed eating the last slice of cake.\"",
            "\"The shop lifter was caught red-handed by security.\""
        ],
        tags: ["Classic", "Everyday", "Legal"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "23",
        term: "Vibe check",
        category: "Slang",
        definition: "A quick assessment of someone's mood, energy, or the overall atmosphere.",
        origin: "TikTok and meme culture, emerged as a trend in 2019.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"Vibe check — how are we feeling about the project?\"",
            "\"The party passed the vibe check instantly.\""
        ],
        tags: ["GenZ", "SocialMedia", "Chat"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "24",
        term: "A piece of cake",
        category: "Idiom",
        definition: "Something very easy to do.",
        origin: "1930s American English — cakes were given as prizes at competitions.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"The exam was a piece of cake — finished in 30 minutes.\"",
            "\"Don't worry, parallel parking is a piece of cake once you practice.\""
        ],
        tags: ["Classic", "Everyday", "School"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "25",
        term: "Salty",
        category: "Slang",
        definition: "Bitter, upset, or irritated — often over something minor.",
        origin: "AAVE origins, used since at least the 1930s, went viral in gaming culture.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"Why are you so salty about losing one game?\"",
            "\"She got salty when they didn't invite her.\""
        ],
        tags: ["GenZ", "Gaming", "SocialMedia"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "26",
        term: "Touch grass",
        category: "Slang",
        definition: "Go outside and experience reality — implies someone is spending too much time online.",
        origin: "Internet forums and gaming communities, peaked around 2021.",
        frequency: 3,
        usageWarning: "Caution",
        examples: [
            "\"You've been arguing online for 6 hours. Go touch grass.\"",
            "\"Bro needs to touch grass after that rant.\""
        ],
        tags: ["Internet", "Gaming", "GenZ"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "27",
        term: "Cost an arm and a leg",
        category: "Idiom",
        definition: "Extremely expensive.",
        origin: "Post-WWII American expression about high costs.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"That designer jacket costs an arm and a leg.\"",
            "\"Rent in this city costs an arm and a leg.\""
        ],
        tags: ["Classic", "Everyday", "Finance"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "28",
        term: "Ick",
        category: "Slang",
        definition: "A sudden feeling of disgust or turn-off toward someone you were interested in.",
        origin: "Dating culture, popularized by reality TV show Love Island.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"He chewed with his mouth open — instant ick.\"",
            "\"Running for the bus gave me the ick.\""
        ],
        tags: ["Romance", "GenZ", "SocialMedia"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "29",
        term: "Let the cat out of the bag",
        category: "Idiom",
        definition: "To accidentally reveal a secret.",
        origin: "18th-century market fraud — sellers would substitute cats for piglets in bags.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"Oops, I let the cat out of the bag about the surprise party.\"",
            "\"Don't let the cat out of the bag — it's supposed to be confidential.\""
        ],
        tags: ["Classic", "Everyday", "Social"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "30",
        term: "Sus",
        category: "Slang",
        definition: "Short for suspicious — used when something or someone seems dishonest or shady.",
        origin: "Popular since the 1930s in British English, resurgence via 'Among Us' game (2020).",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"That email looks sus — don't click the link.\"",
            "\"Why are you acting so sus right now?\""
        ],
        tags: ["GenZ", "Gaming", "Chat"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "31",
        term: "Kill two birds with one stone",
        category: "Idiom",
        definition: "To solve two problems or accomplish two objectives with a single action.",
        origin: "Ancient proverb, first recorded in English by Thomas Hobbes in 1656.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"I'll study at the café — kill two birds with one stone.\"",
            "\"Working out in the morning kills two birds: fitness and energy.\""
        ],
        tags: ["Classic", "Office", "Motivation"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "32",
        term: "Rent free",
        category: "Slang",
        definition: "When something or someone occupies your thoughts constantly and without effort.",
        origin: "Internet culture, popularized from the phrase 'living rent free in your head'.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"That song is living rent free in my head.\"",
            "\"Her comeback is living rent free in my mind.\""
        ],
        tags: ["GenZ", "SocialMedia", "Internet"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "33",
        term: "Once in a blue moon",
        category: "Idiom",
        definition: "Very rarely; almost never.",
        origin: "Refers to the rare occurrence of two full moons in one calendar month.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"He only cleans his room once in a blue moon.\"",
            "\"We go to that restaurant once in a blue moon.\""
        ],
        tags: ["Classic", "Everyday", "TimePhrases"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "34",
        term: "Simp",
        category: "Slang",
        definition: "Someone who does way too much for a person they like, often without reciprocation.",
        origin: "Hip-hop culture, reintroduced via TikTok and gaming communities.",
        frequency: 4,
        usageWarning: "Caution",
        examples: [
            "\"He bought her flowers every day for a month — total simp move.\"",
            "\"Don't simp, king. Know your worth.\""
        ],
        tags: ["GenZ", "Romance", "Gaming"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "35",
        term: "Barking up the wrong tree",
        category: "Idiom",
        definition: "Pursuing a mistaken or misguided course of action.",
        origin: "Early 19th-century American hunting — dogs barking at the wrong tree after prey.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"If you think I took your lunch, you're barking up the wrong tree.\"",
            "\"They're barking up the wrong tree with that marketing strategy.\""
        ],
        tags: ["Classic", "Office", "Everyday"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "36",
        term: "W / L",
        category: "Slang",
        definition: "W = Win / L = Loss. Used to quickly judge something as good or bad.",
        origin: "Gaming and sports culture, shorthand that became universal on social media.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"Got front-row tickets. Massive W.\"",
            "\"Burnt my dinner again. Huge L.\""
        ],
        tags: ["GenZ", "Gaming", "Chat"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "37",
        term: "Throw shade",
        category: "Idiom",
        definition: "To subtly show disrespect or contempt toward someone.",
        origin: "Drag and ballroom culture (1980s), mainstream via 'RuPaul's Drag Race'.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"Did she just throw shade at my outfit?\"",
            "\"He threw shade at the competitor during the interview.\""
        ],
        tags: ["SocialMedia", "GenZ", "Entertainment"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "38",
        term: "Cap",
        category: "Slang",
        definition: "A lie. 'That's cap' means 'That's a lie'.",
        origin: "AAVE, inverse of 'No cap'. Went viral on social media.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"He said he benches 300 lbs? That's cap.\"",
            "\"Stop capping — we all know the truth.\""
        ],
        tags: ["GenZ", "Chat", "SocialMedia"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "39",
        term: "Blessing in disguise",
        category: "Idiom",
        definition: "An apparently unfortunate event that eventually leads to a good outcome.",
        origin: "18th-century literature, paraphrased from a poem by James Hervey.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"Getting fired was a blessing in disguise — I found my dream job.\"",
            "\"The flight delay was a blessing in disguise; I met my business partner.\""
        ],
        tags: ["Classic", "Motivation", "Everyday"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "40",
        term: "Stan",
        category: "Slang",
        definition: "An extremely dedicated or obsessive fan of a celebrity, show, or franchise.",
        origin: "Eminem's song 'Stan' (2000) about an obsessive fan.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"I stan BTS — their music just speaks to me.\"",
            "\"The Taylor Swift stans crashed the ticketing website.\""
        ],
        tags: ["SocialMedia", "Entertainment", "GenZ"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "41",
        term: "Spill the beans",
        category: "Idiom",
        definition: "To reveal secret or confidential information, usually prematurely.",
        origin: "Ancient Greek voting — beans were used as voting tokens; spilling revealed results.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"Come on, spill the beans — who's the new hire?\"",
            "\"She accidentally spilled the beans about the merger.\""
        ],
        tags: ["Classic", "Office", "Social"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "42",
        term: "Drip",
        category: "Slang",
        definition: "Stylish, fashionable appearance — especially with clothing and accessories.",
        origin: "Hip-hop culture, popularized by Atlanta rappers in the 2010s.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"Check out his drip — those Jordans are fire.\"",
            "\"She always shows up with the best drip.\""
        ],
        tags: ["Fashion", "GenZ", "SocialMedia"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "43",
        term: "Back to square one",
        category: "Idiom",
        definition: "To start over from the beginning after a setback.",
        origin: "Possibly from early board games or BBC radio football commentary.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"The client rejected the design — back to square one.\"",
            "\"My code broke everything, so it's back to square one.\""
        ],
        tags: ["Office", "Classic", "Everyday"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "44",
        term: "Mid",
        category: "Slang",
        definition: "Mediocre, average, not impressive. Used as a dismissive judgment.",
        origin: "Internet and gaming culture. Became mainstream slang around 2021.",
        frequency: 4,
        usageWarning: "Caution",
        examples: [
            "\"The new season of that show was mid.\"",
            "\"Don't call my cooking mid!\""
        ],
        tags: ["GenZ", "Gaming", "Internet"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "45",
        term: "Hit the nail on the head",
        category: "Idiom",
        definition: "To describe exactly what is causing a situation or problem.",
        origin: "Carpentry metaphor, used in English since the 15th century.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"You hit the nail on the head — that's exactly the issue.\"",
            "\"Her analysis hit the nail on the head.\""
        ],
        tags: ["Office", "Classic", "Communication"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "46",
        term: "Based",
        category: "Slang",
        definition: "Agreeable, admirable, or expressing a bold truth without caring what others think.",
        origin: "Rapper Lil B ('Based God'), then adopted by online communities.",
        frequency: 4,
        usageWarning: "Caution",
        examples: [
            "\"He said he doesn't use social media. Based.\"",
            "\"That take is extremely based.\""
        ],
        tags: ["Internet", "GenZ", "Opinion"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "47",
        term: "Burning the midnight oil",
        category: "Idiom",
        definition: "Working late into the night.",
        origin: "Before electricity, oil lamps were used for light — working by oil lamp meant working very late.",
        frequency: 4,
        usageWarning: "Safe",
        examples: [
            "\"We've been burning the midnight oil to finish this report.\"",
            "\"Students burn the midnight oil during finals week.\""
        ],
        tags: ["Office", "Classic", "School"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "48",
        term: "NPC",
        category: "Slang",
        definition: "Non-Playable Character — someone who seems to have no original thoughts or personality.",
        origin: "Video game term adapted by internet culture to mock people acting predictably.",
        frequency: 4,
        usageWarning: "Risky",
        examples: [
            "\"He just repeats everything his friends say. Total NPC behavior.\"",
            "\"Don't be an NPC  — think for yourself.\""
        ],
        tags: ["Gaming", "Internet", "GenZ"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "49",
        term: "The elephant in the room",
        category: "Idiom",
        definition: "An obvious problem or controversial topic that everyone avoids discussing.",
        origin: "First published use by Ivan Krylov in 1814 Russian fable.",
        frequency: 5,
        usageWarning: "Safe",
        examples: [
            "\"Let's address the elephant in the room — our budget is overspent.\"",
            "\"Nobody wanted to talk about the elephant in the room at dinner.\""
        ],
        tags: ["Office", "Classic", "Social"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
    {
        id: "50",
        term: "Delulu",
        category: "Slang",
        definition: "Short for 'delusional' — having unrealistic beliefs or expectations, especially in romance.",
        origin: "K-pop fandom culture, adopted wider via TikTok. 'Delulu is the solulu.'",
        frequency: 4,
        usageWarning: "Caution",
        examples: [
            "\"She thinks he's going to propose after one date — she's delulu.\"",
            "\"Being a little delulu is the solulu (solution).\""
        ],
        tags: ["GenZ", "Romance", "SocialMedia"],
        media: { youtube_id: "dQw4w9WgXcQ", image_url: "" }
    },
];

export const slangData: SlangItem[] = [
    ...originalData,
    ...newSlangData,
    ...newSlangData2,
    ...newSlangData3,
];

export function getVibeOfTheDay(items: SlangItem[]): SlangItem {
    const today = new Date();
    const dayOfYear = Math.floor(
        (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    return items[dayOfYear % items.length];
}

export function filterItems(
    items: SlangItem[],
    category: "All" | "Slang" | "Idiom",
    searchQuery: string
): SlangItem[] {
    let filtered = items;
    if (category !== "All") {
        filtered = filtered.filter((item) => item.category === category);
    }
    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(
            (item) =>
                item.term.toLowerCase().includes(q) ||
                item.definition.toLowerCase().includes(q) ||
                item.tags.some((tag) => tag.toLowerCase().includes(q))
        );
    }
    return filtered;
}
