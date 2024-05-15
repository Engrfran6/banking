import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import { Account, Bank, Transaction, User } from "@/types"

const Home = () => {

  const user: User = {
  firstName: 'Carol ',
  lastName: 'Henry',
  email: 'deulo@gmail.com',
  userId: "",
  $id: '',
  dwollaCustomerUrl: '',
  dwollaCustomerId: '',
  name: '',
  address1: '',
  city: '',
  state: '',
  postalCode:'',
  dateOfBirth:'',
  ssn:''
};



const bank: Bank[] = [
  {
     // bank
    $id: '',
    accountId: '',
    bankId: 'Chase Bank',
    accessToken: '',
    fundingSourceUrl: '',
    userId: '',
    shareableId: '11',
  },
  {
     // bank
    $id: '',
    accountId: '',
    bankId: 'Wells Fargo',
    accessToken: '',
    fundingSourceUrl: '',
    userId: '',
    shareableId: '12',
  },
  {
     // bank
    $id: '',
    accountId: '',
    bankId: 'BOA',
    accessToken: '',
    fundingSourceUrl: '',
    userId: '',
    shareableId: '12',
  }
]

const account: Account[] = [
  {
    // account
    id: '',
    availableBalance: 343,
    currentBalance: 200,
    officialName: 'Wells Fargo',
    mask: '4366',
    institutionId: '',
    name: 'Carol Henry Nancy',
    type: 'visa card',
    subtype: '',
    appwriteItemId: '',
    shareableId: '11',
  },
  {
    // account
    id: '',
    availableBalance: 343,
    currentBalance: 20,
    officialName: 'Chase Bank',
    mask: '9087',
    institutionId: '',
    name: 'Carol N. Henry',
    type: 'mastercard',
    subtype: '',
    appwriteItemId: '',
    shareableId: '12',
  },
  {
    // account
    id: '',
    availableBalance: 343,
    currentBalance: 70,
    officialName: 'Chase Bank',
    mask: '9087',
    institutionId: '',
    name: 'Carol N. Henry',
    type: 'mastercard',
    subtype: '',
    appwriteItemId: '',
    shareableId: '12',
  }
]

  const transactions: Transaction[] =[
  {
    id:'',
    $id: '',
    name: '',
    paymentChannel: '',
    type: '',
    accountId: '',
    amount: 232322,
    pending:  false,
    category: '',
    date: '',
    image: '',
    $createdAt: '',
    channel: '',
    senderBankId: '',
    receiverBankId: '',
  }
  ]

const mergedBankWithCCount = bank.map(bankDetails=> {
  const correspondingAccount = account.find(acc => acc.shareableId === bankDetails.shareableId );
  if (correspondingAccount) {
     return { ...bankDetails, ...correspondingAccount };
  } 
  return bankDetails; // If corresponding account not found, return bank object as is
}) as (Bank & Account)[]


const banks = mergedBankWithCCount


  // Function to calculate total current balance
function calculateTotalCurrentBalance(banks: (Bank | Account)[]): number {
  let totalCurrentBalance = 0;
  for (const bankOrAccount of banks) {
    // Check if it's an Account (assuming Account has currentBalance property)
    if ('currentBalance' in bankOrAccount) {
      totalCurrentBalance += bankOrAccount.currentBalance;
    }
  }
  return totalCurrentBalance;
}

const totalCurrentBalance = calculateTotalCurrentBalance(banks)



  return (
    <section className="home">
      <div className="home-content" >
        <header className="home-header">
          <HeaderBox
           type="greeting"
           title='Welcome'
           user={`${user.firstName} | ${user.lastName}` || "Guest"}
           subtext='Access and manage your account and transactions efficiently'
          />


          <TotalBalanceBox 
          accounts={account}
          totalBanks={banks.length}
          totalCurrentBalance={totalCurrentBalance}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user= {user}
      transactions= {transactions}
      banks={banks} 
      />
    </section>
  )
}
export default Home