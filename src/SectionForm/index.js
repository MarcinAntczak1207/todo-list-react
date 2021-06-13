import "./style.css";

const SectionForm = ({ title, body }) => (
<section className="section">
        <h2 className="section__header">{title}</h2>
        <div className="section__item">
            {body}
        </div>
      </section>
);

export default SectionForm;