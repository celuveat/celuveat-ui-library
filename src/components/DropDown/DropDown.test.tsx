import '@testing-library/jest-dom';
import {
  cleanup,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DropDown from '.';

describe('DropDown 컴포넌트 테스트', () => {
  afterEach(() => cleanup());

  it('DropDown.Trigger 버튼을 눌렀을 때 DropDown.Options가 나온다.', async () => {
    render(
      <DropDown>
        <DropDown.Trigger>trigger</DropDown.Trigger>
        <DropDown.Options>
          <DropDown.Option>DROP_DOWN_ITEMS</DropDown.Option>
        </DropDown.Options>
      </DropDown>
    );

    const button = screen.getByRole('button');
    userEvent.click(button);

    const item = await waitFor(() => screen.getByText('DROP_DOWN_ITEMS'));
    expect(item).toBeInTheDocument();
  });

  it('DropDown.Items가 보여진 상태에서 DropDown.Trigger를 누르면 DropDown.Options가 보이지 않는다', async () => {
    render(
      <DropDown>
        <DropDown.Trigger>trigger</DropDown.Trigger>
        <DropDown.Options>
          <li>DROP_DOWN_ITEMS</li>
        </DropDown.Options>
      </DropDown>
    );

    const button = screen.getByRole('button');
    userEvent.click(button);

    const item = await waitFor(() => screen.getByText('DROP_DOWN_ITEMS'));
    expect(item).toBeInTheDocument();

    userEvent.click(button);
    await waitForElementToBeRemoved(() => screen.getByText('DROP_DOWN_ITEMS'));

    const disappearedElement = screen.queryByText('DROP_DOWN_ITEMS');

    expect(disappearedElement).toBeNull();
  });

  it('DropDown.Items가 보여진 상태에서 DropDown.Trigger를 외부를 누르면 DropDown.Options항목이 화면에서 사라진다.', async () => {
    render(
      <div>
        <DropDown>
          <DropDown.Trigger>trigger</DropDown.Trigger>
          <DropDown.Options>
            <li>DROP_DOWN_ITEMS</li>
          </DropDown.Options>
        </DropDown>
      </div>
    );

    const button = screen.getByRole('button');
    userEvent.click(button);

    const item = await waitFor(() => screen.getByText('DROP_DOWN_ITEMS'));
    expect(item).toBeInTheDocument();

    userEvent.click();
    await waitForElementToBeRemoved(() => screen.getByText('DROP_DOWN_ITEMS'));

    const disappearedElement = screen.queryByText('DROP_DOWN_ITEMS');

    expect(disappearedElement).toBeNull();
  });
});
