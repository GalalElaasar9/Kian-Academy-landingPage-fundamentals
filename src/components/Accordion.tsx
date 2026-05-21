import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    title: "هل الكورس مناسب للمبتدئين ؟",
    content:
      "أيوه، الكورس معمول مخصوص لأي شخص بيبدأ من الصفر بدون أي خبرة.",
  },
  {
    title: "هل الكورس عملى ؟",
    content:
      "أيوه، الكورس فيه تطبيقات وتمارين ومشاريع عملية أثناء الشرح.",
  },
  {
    title: "هل أقدر أتعلم أي Track بعد الكورس ؟",
    content:
      "أيوه، بعد ما تخلص الـ Fundamentals تقدر تدخل أي مجال زي Front-End أو Back-End أو Flutter أو AI وغيرهم.",
  },
  {
    title: "هل يوجد شهادة؟",
    content:
      "أيوه، بيتم منح Certificate بعد إتمام الكورس.",
  },
];

export default function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <div
      dir="rtl"
      className="mx-auto max-w-2xl space-y-4"
    >
      {faqData.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between px-6 py-5 text-right cursor-pointer"
          >
            <span className="text-lg font-semibold text-white">
              {item.title}
            </span>

            <motion.div
              animate={{ rotate: active === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-white/70" />
            </motion.div>
          </button>

          <AnimatePresence>
            {active === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p
                  className="
                    px-6 pb-5
                    text-right
                    text-white/70
                    leading-loose
                    break-words
                    [unicode-bidi:plaintext]
                  "
                >
                  {item.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}