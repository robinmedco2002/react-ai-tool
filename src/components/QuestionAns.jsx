import Answer from './Answers';
const QuestionAns = ({ item, index }) => {
    return (
        <>
            <div key={index + Math.random()} className={item.type == 'q' ? 'flex justify-end' : ''}>
                {
                    item.type == 'q' ?
                        <li key={index + Math.random()}
                            className='text-left p-1 border-8 dark:border-zinc-700 border-red-100 dark:bg-zinc-700 bg-red-100 
                          rounded-tl-3xl rounded-bl-3xl rounded-br-3xl w-fit'>
                            <Answer ans={item.text} totalResult={1} index={index} type={item.type} /></li>
                        :
                        item.text.map((ansItem, ansIndex) => (
                            <li key={ansIndex + Math.random()} className='text-left p-1'>
                                <Answer ans={ansItem} totalResult={item.length} index={ansIndex} type={item.type} /></li>
                        ))
                }
            </div>
        </>
    )
}

export default QuestionAns;