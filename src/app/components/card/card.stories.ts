import {CardComponent} from "./card.component";
import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {NgHeroiconsModule} from "@dimaslz/ng-heroicons";

export default {
  title: 'Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        NgHeroiconsModule
      ],
    })
  ],
  args: {
  }
} as Meta<CardComponent>;

const baseTemplate: Story = (args) => ({
  props: args,
});

export const Cards = baseTemplate.bind({});



