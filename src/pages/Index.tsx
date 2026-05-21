import { motion } from "framer-motion";

import { SubscribeButton } from "@/components/SubscribeButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import opinion1 from "@/assets/opinion1.jpeg";
import opinion2 from "@/assets/opinion2.jpeg";
import opinion3 from "@/assets/opinion3.jpeg";
import opinion4 from "@/assets/opinion4.jpeg";
import opinion5 from "@/assets/opinion5.jpeg";
import opinion6 from "@/assets/opinion6.jpeg";
import opinion7 from "@/assets/opinion7.jpeg";
import opinion8 from "@/assets/opinion8.jpeg";
import Projects from "@/components/Projects";

// Project 1
import mainImage from "@/assets/Project_1/main-image.jpeg";
import subImage1 from "@/assets/Project_1/image_1.jpeg";
import subImage2 from "@/assets/Project_1/image_2.jpeg";
import subImage3 from "@/assets/Project_1/image_3.jpeg";
import subImage4 from "@/assets/Project_1/image_4.jpeg";


// Project 2
import mainImageProject_2 from "@/assets/Project_2/main-image-project_2.jpeg";
import subImageProject_2 from "@/assets/Project_2/image_1.jpeg";

// Project 3
import mainImageProject_3 from "@/assets/Project_3/main-image-project_3.jpeg";
import subImageProject_3 from "@/assets/Project_3/image_1.jpeg";
import Accordion from "@/components/Accordion";

const courseTopics = [
  {
    num: "01",
    title: "C++",
    desc: "Learn the fundamentals of C++ programming, syntax, variables, functions, and problem-solving techniques.",
  },
  {
    num: "02",
    title: "Problem Solving",
    desc: "Develop logical thinking skills and solve programming challenges using efficient approaches and algorithms.",
  },
  {
    num: "03",
    title: "OOP",
    desc: "Understand Object-Oriented Programming concepts like classes, objects, inheritance, and polymorphism.",
  },
  {
    num: "04",
    title: "Data Structures",
    desc: "Learn how to organize and manage data efficiently using arrays, linked lists, stacks, queues, and trees.",
  },
  {
    num: "05",
    title: "Algorithms",
    desc: "Study searching, sorting, recursion, and optimization techniques to write efficient and scalable code.",
  },
  {
    num: "06",
    title: "Database",
    desc: "Understand database fundamentals, SQL queries, relationships, and how to manage structured data effectively.",
  },
  {
    num: "07",
    title: "Design Patterns",
    desc: "Learn reusable software design solutions that help build clean, maintainable, and scalable applications.",
  },
  {
    num: "08",
    title: "Debugging Techniques",
    desc: "Master debugging strategies and tools to identify, analyze, and fix errors efficiently in your code.",
  },
  {
    num: "09",
    title: "Build Mini Projects",
    desc: "Apply your knowledge by building real-world mini projects to strengthen your practical programming skills.",
  },
];

const testimonials = [
  // {id: 1 , opinion: opinion1},
  { id: 2, opinion: opinion2 },
  { id: 3, opinion: opinion3 },
  { id: 4, opinion: opinion4 },
  { id: 5, opinion: opinion5 },
  // {id: 6 , opinion: opinion6},
  { id: 7, opinion: opinion7 },
  { id: 8, opinion: opinion8 },
];

const stats = [
  { value: "+5000", label: "طالب" },
  { value: "+120", label: "ساعة محتوى" },
  { value: "+15", label: "مشروع عملي" },
  { value: "98%", label: "نسبة الرضا" },
];

const projects = [
  {
    id: 1,
    img: mainImage,
    subImages: [
      { id: 1, subImage: subImage1 },
      { id: 2, subImage: subImage2 },
      { id: 3, subImage: subImage3 },
      { id: 4, subImage: subImage4 },
      // {id:5 , subImage:subImage5},
      // {id:6 , subImage:subImage6},
      // {id:7 , subImage:subImage7}
    ],
  },
  { id: 2, img: mainImageProject_2, subImages: [{ id: 1, subImage: subImageProject_2 }] },
  { id: 3, img: mainImageProject_3, subImages: [{ id: 1, subImage: subImageProject_3 }] },
];

function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16">
      {tag ? (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-semibold tracking-wider uppercase mb-5">
          {tag}
        </span>
      ) : (
        ""
      )}

      <h2 className="text-3xl md:text-4xl font-black mb-4 text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-24 px-4 scroll-mt-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function Index() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-md border border-border text-md font-medium text-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              خصم لفترة محدودة على دبلومة الـ Fundamentals عدد ساعات الكورس +120
            </span>
            <h1
              className="text-[31px] md:text-7xl lg:text-[70px] font-black mb-6 leading-[1.1] tracking-tight"
              style={{ lineHeight: "1.5" }}
            >
              <span className="text-foreground">Learn Programming From Zero To Hero</span>{" "}
              {/* <span className="text-gradient">Data Analysis</span> */}
              {/* <br /> */}
              {/* <span className="text-foreground">من الصفر</span> */}
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              ابدأ رحلتك في عالم البرمجة من الصفر، وافهم أساسيات البرمجة بطريقة عملية وسهلة تؤهلك
              لأي مجال بعد كده{" "}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <SubscribeButton size="lg" />
              <a
                href="#content"
                className="px-8 py-4 rounded-full border border-border bg-card/30 backdrop-blur-md text-foreground hover:bg-card/60 transition-all font-semibold"
              >
                استكشف المحتوى
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Start With Programming Fundamentals? */}
      <Section className="bg-card/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="? Why Start With Programming Fundamentals" subtitle="" />
          <div className="grid md:grid-cols-2 gap-6 mb-14" dir="ltr">
            {[
              {
                title: "Learn Problem Solving",
                desc: " . اتعلم إزاي تفكر كمبرمج وتحلل أي مشكلة بخطوات واضحة ومنظمة",
              },
              {
                title: "Build Strong Basics",
                // desc: " أو أى مجال تانى من مجالات البرمجة Web , Mobile , AI , Cyber Security أساس قوى يخليك تدخل بعدة أى مجال زى ",
                desc: "أساس قوى يخليك تدخل بعدة أى مجال زى الويب أو الموبايل أو الذكاء الإصطناعى أو الأمن السيبرانى أو أى مجال تانى من مجالات البرمجة",
              },
              {
                title: "Start Your Tech Career",
                desc: " . البرمجة بقت من أهم المهارات المطلوبة في كل المجالات والشركات",
              },
              {
                title: "Practical Learning",
                desc: " . هتتعلم من خلال تطبيقات وتمارين عملية مش مجرد شرح نظري",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft hover:border-primary/40 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <SubscribeButton />
        </div>
      </Section>

      {/* COURSE CONTENT */}
      <Section id="content">
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="Roadmap" title="What You’ll Learn" subtitle="" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 text-left" dir="ltr">
            {courseTopics.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 hover:border-primary/40 transition-all shadow-soft"
              >
                <div className="text-sm font-mono text-primary-glow mb-4 tracking-wider">
                  {t.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary-glow transition-colors">
                  {t.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section className="bg-card/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Student Projects"
            title="Projects Built By Our Students"
            subtitle="Real projects students build during the course "
          />
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-border shadow-elegant bg-card"
              >
                <Projects project={project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            tag="Student Reviews"
            title="Real feedback from our students during their learning journey"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl shadow-soft overflow-hidden"
              >
                <img src={t.opinion} alt={t.opinion} className="object-full h-98.75 w-full" />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>

      {/* WHY KIAN */}
      <Section className="bg-card/20" id="why-kian">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            tag="About Us"
            subtitle=""
            title="Kian Academy — Learn Tech Skills The Practical Way"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: "🎯",
                title: "منهج عملي 100%",
                desc: "تدريب عملى على مشاريع حقيقية خلال فترة الكورس بالإضافة إلى تدريب عملى لمدة شهرين فى شركات البرمجة",
              },
              {
                icon: "👨‍🏫",
                title: "مدربون محترفون ومينتورز متخصصون",
                desc: "فريق من المبرمجين أصحاب الخبرة في كبرى الشركات التقنية بالإضافة لمينتورز لمساعدتك خطوة بخطوة للوصول لأقصى إستفادة من الكورس.",
              },
              {
                icon: "🤝",
                title: "متابعة شخصية",
                desc: "كل طالب عندنا له اهتمام خاص ومتابعة مستمرة حتى الإحتراف بالإضافة لمتابعة مستمرة بعد إنتهاء الكورس.",
              },
              {
                icon: "🚀",
                title: "تأهيل لسوق العمل",
                desc: "نساعدك في بناء portfolio قوي والاستعداد لمقابلات الشركات.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-7 shadow-soft hover:border-primary/40 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 mb-10">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              في <span className="text-gradient font-bold">أكاديمية كيان</span>، إحنا مش بنعلم برمجة
              بس — إحنا بنبني جيل جديد من المبرمجين القادرين على المنافسة محلياً وعالمياً. رسالتنا
              إن كل طالب يخرج من عندنا وعنده القدرة الحقيقية على تنفيذ مشاريع احترافية والدخول لسوق
              العمل بثقة.
            </p>
          </div>
          <div className="text-center">
            <SubscribeButton />
          </div>
        </div>
      </Section>
      {/* Q & A */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="text-2xl md:text-4xl font-black mb-6 leading-[1.1] tracking-tight"
              style={{ lineHeight: "1.5" }}
            >
              <span className="text-foreground">Start Your Programming Journey Today </span>
            </h1>
            <p className="text-lg md:text-[32px] text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              متضيعش وقت أكتر ، وابدأ دلوقت أبنى مستقبلك فى مجال البرمجة مع
              <span> Kian Academy </span>
            </p>
            <Accordion/>
            <div className="text-center mt-10">
              <SubscribeButton />
            </div>
          </motion.div>
        </div>
      </section>
      <Section className="bg-card/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-primary shadow-glow mb-8"
          >
            <svg
              className="w-12 h-12 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </motion.div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-xs font-semibold tracking-wider uppercase mb-5">
            ضماننا لك
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            ضمان استرداد 100%
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            بنضمنلك أنك هتعمل في الكورس اكتر من 5 مشاريع حقيقية ولو دا متنفذش هتسترد فلوسك بالكامل
            نهاية الكورس كمان زيادة عليه 1000 جنيه تعويضاً لوقتك
          </p>
          <SubscribeButton />
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <div className="max-w-3xl mx-auto">
          {/* <SectionHeader tag="عرض محدود" title="العرض ينتهي خلال" /> */}
          <div className="mb-14">
            <CountdownTimer />
          </div>
        </div>
      </Section>

      <footer className="text-center py-10 text-muted-foreground border-t border-border text-sm">
        © {new Date().getFullYear()} جميع الحقوق محفوظة
      </footer>
    </main>
  );
}
