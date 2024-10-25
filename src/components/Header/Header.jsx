import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-5 border-b-2 max-w-6xl m-auto'>
            <h1 className="text-5xl">knowledge cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;