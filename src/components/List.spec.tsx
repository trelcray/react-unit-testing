import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { List } from "./List";

describe("List Component", () => {
  it("Should render list items", async () => {
    const { getByText, rerender, queryByText, unmount } = render(
      <List initialItems={["Thalis", "Vitória", "Yuri"]} />
    );

    expect(getByText("Thalis")).toBeInTheDocument();
    expect(getByText("Vitória")).toBeInTheDocument();
    expect(getByText("Yuri")).toBeInTheDocument();

    unmount();
    rerender(<List initialItems={["Eva"]} />);

    expect(getByText("Eva")).toBeInTheDocument();
    expect(queryByText("Thalis")).not.toBeInTheDocument();
  });

  it("Should be able to add new items to the list", async () => {
    const { getByText, getByPlaceholderText } = render(
      <List initialItems={[]} />
    );

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");

    await userEvent.type(inputElement, "Novo");
    userEvent.click(addButton);
    await waitFor(() => {
      expect(getByText("Novo")).toBeInTheDocument();
    });
  });

  it("Should be able to remove items from the list", async () => {
    const { getAllByText, queryByText } = render(
      <List initialItems={["Thalis"]} />
    );

    const removeButtons = getAllByText("Remover");

    userEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText("Thalis")).not.toBeInTheDocument();
    });
  });
});
