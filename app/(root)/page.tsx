import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
  const loggedIn = {firstName: 'Francis',lastName:'Okpoluaefe', email:'deulo@gmail.com'}
  return (
    <section className="home">
      <div className="home-content" >
        <header className="home-header">
          <HeaderBox
           type="greeting"
           title='Welcome'
           user={loggedIn?.firstName || 'Guest'}
           subtext='Access and manage your account and transactions efficiently'
          />


          <TotalBalanceBox 
          accounts={[]}
          totalBanks={6}
          totalCurrentBalance={22.72}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:5343.73},{currentBalance:7536.09}]}
      />
    </section>
  )
}
export default Home