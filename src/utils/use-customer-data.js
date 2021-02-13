import { useEffect, useState } from "react";
import { useCustomerApi } from "./use-customer-api";

export const useCustomerData = (customerId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [customerData, setCustomerData] = useState(undefined);

  const { data: rewards, isLoading: isRewardsLoading } = useCustomerApi(
    "rewards",
    customerId
  );
  const { data: alerts, isLoading: isAlertsLoading } = useCustomerApi(
    "alerts",
    customerId
  );

  useEffect(() => {
    setIsLoading(isRewardsLoading || isAlertsLoading);
    setCustomerData({ rewards, alerts });
  }, [rewards, alerts, isAlertsLoading, isRewardsLoading]);

  return { isLoading, customerData };
};
