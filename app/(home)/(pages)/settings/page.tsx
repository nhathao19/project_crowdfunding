import { isUserPremium } from "@/lib/server-actions";
import ManageBilling from "../../settings/manage-billing";

const Settings = async () => {
  const isPremeium = await isUserPremium();

  return (
    <div className="md:w-3/5 mx-auto py-10 px-6 md:px-0">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="text-gray-500">Manage your settings</p>

      <div className="mt-10">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <h1 className="">Next Payment Date</h1>
            <p className="">june 30th 2024</p>
          </div>

          <div className="flex items-center justify-between">
            <h1 className="">Next Payment Amount</h1>
            <p className="">$ 7.99</p>
          </div>
          <hr />

          {isPremeium ? (
            <>
              <ManageBilling />
            </>
          ) : (
            <div className="mt-10 text-blue-500 cursor-pointer hover:underline">
              Manage Info
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
