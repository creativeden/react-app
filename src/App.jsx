import './App.css';
import LeftPanel from './layouts/LeftPanel';
import Body from './layouts/Body';
import Header from './components/Header';
import JournalList from './components/JournalList';
import JournalAddButton from './components/JournalAddButton';
import CardButton from './components/CardButton';
import JournalItem from './components/JournalItem';

function App() {
    const data = [
        {
            title: 'Подготовка',
            text: 'Горные походы',
            date: new Date()
        },
        {
            title: 'Подготовка 2',
            text: 'Горные походы 2',
            date: new Date()
        }
    ];

    return (
        <div className="app">
            <LeftPanel>
                <Header/>
                <JournalAddButton/>
                <JournalList>
                    <CardButton>
                        <JournalItem
                            title={data[0].title}
                            text={data[0].text}
                            date={data[0].date}
                        />
                    </CardButton>
                    <CardButton>
                        <JournalItem
                            title={data[1].title}
                            text={data[1].text}
                            date={data[1].date}
                        />
                    </CardButton>
                </JournalList>
            </LeftPanel>
            <Body>
                Body
            </Body>
        </div>
    );
}

export default App;
