import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = () => {
    return (
        <div className='App'>
            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                <span className='text-white font-semibold'>Welcome to travel</span><br />{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={[
                            'Bangladesh',
                            'Thailand',
                            'Indonesia',
                            'Malaysia',
                            'Vietnam',
                            'Cambodia']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
        </div>
    );
};

export default TypeWriter;