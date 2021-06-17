import "./style.css";

const FormSection = ({ title, body }) => (
  <section className="section">
    <h2 className="section__header">{title}</h2>
    <div className="section__item">
      {body}
    </div>
  </section>
);
export default FormSection;