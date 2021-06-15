import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="section__buttons" >
                {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
            className="section__buttons"
            disabled={tasks.every(({ done }) => done)}
                >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;
