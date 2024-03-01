import SettingsMenu from "../Components/SettingsMenu";

const Settings = () => {
    return (
        <div className='w-full h-full p-4 flex flex-col md:flex-row justify-center gap-64 bg-blue-300'>
            <SettingsMenu />
        </div>
    )
}

export default Settings