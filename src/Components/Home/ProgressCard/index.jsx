import { RingProgress, Text } from '@mantine/core';

const ProgressCard = () => {
    const progressValue = 85;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center space-y-4 m-5">
            <h3 className="text-lg font-semibold">Tasks</h3>
            <div className='relative'>
                <RingProgress
                    sections={[{ value: 40, color: 'blue' }]} rootColor="black"
                    label={
                        <Text
                            color='blue'
                            weight={700}
                            align='center'
                            size='xl'
                        >
                            40%
                        </Text>
                    }
                />
            </div>
            <div className='flex items-center justify-center gap-2'>
                <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-blue-500 rounded-full' />
                    <p>Completed</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-black rounded-full' />
                    <p>Pending</p>
                </div>
            </div>
        </div>
    );
}

export default ProgressCard;
``
