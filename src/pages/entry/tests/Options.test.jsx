import { render, screen } from "@testing-library/react";
import Option from "../Options";

test("displays image fro each scoop option from server", () => {
  render(<Option optionType="scoops" />);

  // find images
  const scoopImages = screen.getAllByRole("img", { name: /sccop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toBeEqual(["Chocolate scoop", "Vanilla scoop"]);
});
