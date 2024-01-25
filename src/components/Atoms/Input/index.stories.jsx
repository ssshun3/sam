import { Input } from "./index";

export default { component: Input };

export const Default = {
  args: {
    onEditComplete: (value) => {
      console.log("Input value:", value);
    },
  },
};
