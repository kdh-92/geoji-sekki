import { Meta, StoryObj } from "@storybook/react";

import ReactionSection from "@/components/molecules/ReactionSection/ReactionSection";

export default {
  title: "molecules/ReactionSection",
  component: ReactionSection,
} as Meta<typeof ReactionSection>;

type Story = StoryObj<typeof ReactionSection>;

export const Default: Story = {
  args: {
    type: "OUTCOME",
    txId: 1,
    upCount: 100,
    downCount: 200,
  },
};