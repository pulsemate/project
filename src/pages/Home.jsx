import Navbar from "../components/navbar";

const Home = () => {
    return <div className="flex-col">
        <Navbar/>
        <div id="section1" className="flex w-full h-[857px] py-[212px] bg-red-100 items-center justify-center">
            <div className="h-fit">
                <img src="src/assets/sinocarebpm.png" width={370} height={549}/>
            </div>
            <div className="flex flex-col h-fit gap-[40px]">
                <h1 className="text-[52px] w-[597px] font-bold">Pulse Mate  Next-Gen Smart Health Strong Heart.</h1>
                <p className="w-[567px]">PulseMate คือเครื่องวัดความดันอัจฉริยะที่เปรียบเสมือนเพื่อนรู้ใจของผู้ใช้งาน เพราะมีการจัดเก็บข้อมูลค่าวัดความดันบนระบบ อีกทั้งยังสามารถดูค่าวัดความดันได้บนเว็ปไวต์แบบเรียลไทม์เพื่อแก้ปัญหาการหลงลืมค่าวัดความดันและของผู้สูงอายุและช่วยให้แพทย์สามารถ
วินิจฉัยโรคได้แม่นยำมากยิ่งขึ้น</p>
                <div>button</div>
            </div>
        </div>
        <div id="section2" className="flex w-full h-[857px] items-center justify-items-center">
            <div className="">left</div>
            <div className="flex-col">
                <h1 className="text-[52px] w-[597px] font-bold">Pulse Mate  Next-Gen Smart Health Strong Heart.</h1>
                <p className="w-[567px]">PulseMate คือเครื่องวัดความดันอัจฉริยะที่เปรียบเสมือนเพื่อนรู้ใจของผู้ใช้งาน เพราะมีการจัดเก็บข้อมูลค่าวัดความดันบนระบบ อีกทั้งยังสามารถดูค่าวัดความดันได้บนเว็ปไวต์แบบเรียลไทม์เพื่อแก้ปัญหาการหลงลืมค่าวัดความดันและของผู้สูงอายุและช่วยให้แพทย์สามารถ
วินิจฉัยโรคได้แม่นยำมากยิ่งขึ้น</p>
                <div>button</div>
            </div>
        </div>
    </div>
}

export default Home;