import './JournalItem.css';

function JournalItem({ title, text, date }) {
    const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

    return (
        <>
            <h2 className="item-title">{title}</h2>
            <h2>{formatedDate} {text}</h2>
        </>
    );
}

export default JournalItem;