import { queryClient } from "@/utils";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ThemeProvider from "./ThemeProvider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
