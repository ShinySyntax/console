import React from "react";
import { Button, buttonVariants } from "@akashnetwork/ui/components";
import { cn } from "@akashnetwork/ui/utils";
import { useMediaQuery } from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { MoreHoriz } from "iconoir-react";

import { LoginRequiredLink } from "@src/components/user/LoginRequiredLink";
import { useUser } from "@src/hooks/useUser";
import { useStripePricesQuery } from "@src/queries/useStripePricesQuery";
import { FCWithChildren } from "@src/types/component";

interface TopUpAmountPickerProps {
  popoverClassName?: string;
  className?: string;
  mdMode: "hover" | "click";
}

export const TopUpAmountPicker: FCWithChildren<TopUpAmountPickerProps> = ({ children, popoverClassName, className, mdMode }) => {
  const user = useUser();
  const [isOpened, setIsOpened] = React.useState(false);
  const { data = [] } = useStripePricesQuery({ enabled: !!user?.userId });
  const muiTheme = useMuiTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("md"));
  const isOnClick = mdMode === "click" || isSmallScreen;

  return (
    <div className={cn("group relative", className)}>
      {data.length > 1 ? (
        <>
          <div className="flex">
            {children}
            {isOnClick && (
              <Button size="icon" variant="ghost" className="ml-2 min-w-max rounded-full" onClick={() => setIsOpened(prev => !prev)}>
                <MoreHoriz />
              </Button>
            )}
          </div>
          <div
            className={cn(
              "opacity-1 invisible max-h-0 overflow-hidden rounded bg-white transition-all duration-200 ease-out hover:opacity-100",
              { "visible max-h-24": isOpened && isOnClick, "group-hover:visible group-hover:max-h-24": !isOnClick },
              popoverClassName
            )}
          >
            {data.map(price => {
              return (
                <LoginRequiredLink
                  key={price.unitAmount || "custom"}
                  className={cn("mr-1 mt-2", buttonVariants({ variant: "default" }))}
                  href={`/api/proxy/v1/checkout${price.isCustom ? "" : `?amount=${price.unitAmount}`}`}
                  message="Sign In or Sign Up to add funds to your balance"
                >
                  {price.isCustom ? "Custom" : "$"}
                  {price.unitAmount}
                </LoginRequiredLink>
              );
            })}
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};