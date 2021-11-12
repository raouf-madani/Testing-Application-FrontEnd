import React from 'react';
import {Steps, Button, message, Row, Col, Divider} from 'antd';
import {InputNumber} from 'antd';

const {Step} = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content1',
  },
  {
    title: 'Last',
    content: 'Last-content2',
  },
  {
    title: 'Last',
    content: 'Last-content3',
  },
  {
    title: 'Last',
    content: 'Last-contents4',
  },
  {
    title: 'Last',
    content: 'Last-contents5',
  },

  {
    title: 'Last',
    content: 'Last-contents6',
  },

  {
    title: 'Last',
    content: 'Last-contents7',
  },
];

const App = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      {/* <div className="flex-div">
        <div>
          <Steps current={current} direction="vertical">
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>

        <div className="steps-content">{steps[current].content}</div>
      </div> */}
      <Divider orientation="left">Percentage columns</Divider>
      <Row>
        <Col flex={1}>
          <Steps current={current} direction="vertical">
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>
        <Col flex={4}>
          <div className="steps-content">
            {' '}
            <InputNumber
              style={{
                width: 200,
              }}
              defaultValue="1"
              step="0.1"
              stringMode
              addonAfter="777"
            />
          </div>
        </Col>
      </Row>

      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{margin: '0 8px'}} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default App;
