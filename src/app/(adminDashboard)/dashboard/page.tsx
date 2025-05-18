import DailyEarnings from "./_components/DailyEarnings";
import EarningsChart from "./_components/EarningsChart";
import OrdersOverview from "./_components/OrdersOverview";
import RecentlyOrders from "./_components/RecentlyOrders";
import StatContainer from "./_components/StatContainer";
import TopSelling from "./_components/TopSelling/TopSelling";

const DashboardPage = () => {
  return (
    <div className="lg:space-y-5 space-y-3 ">
      <StatContainer></StatContainer>
      <div className="grid xl:grid-cols-3 lg:gap-5 gap-5">
        <div className="col-span-2 lg:space-y-5 space-y-3 ">
          <EarningsChart></EarningsChart>
          <OrdersOverview></OrdersOverview>
        </div>
        <div className="lg:space-y-5 space-y-3">
        <TopSelling></TopSelling>
         <DailyEarnings 
        />
        </div>
      </div>
      <RecentlyOrders />
    </div>
  );
};

export default DashboardPage;
