import styles from "./styles.module.scss";
import Container from "../container";
import Heading from "../heading";
import Spacer from "../spacer";

const faqs = [
  {
    question: "Quando si terrà l’evento?",
    answer:
      "L’evento avrà luogo giovedì 27 novembre 2025,e potrai accedere liberamente dalle ore 18:00 alle 22:00.",
  },
  {
    question: "Dove si svolge?",
    answer:
      "Presso la nostra nuova sede sirezionale, in via Palmanova 19 a Olgiate Olona.",
  }
];

const AnswersQuestions = () => {
  return (
    <div>
        <Heading component="h2">
          Dettagli dell'evento
        </Heading>
        <Spacer size={24} />
        <Container scope="sm">
          <ul className={styles.faqList}>
            {faqs.map((faq, index) => (
              <li key={index} className={styles.faqItem}>
                <p className={styles.question}>{faq.question}</p>
                <p className={styles.answer}>{faq.answer}</p>
              </li>
            ))}
          </ul>
      </Container>
    </div>
  );
};

export default AnswersQuestions;
