import Button from "@components/Button"
import { Colors, Text, Title } from "@components/global.styles"
import * as React from "react"
import { Fragment } from "react"
import { Row } from "shards-react"
import { Containe, Content } from "./styles"

interface IntroductionProps {
  name: string
}

const Introduction: React.FC<IntroductionProps> = ({ name }) => {
  return (
    <Fragment>
      <Containe>
        <Row>
          <Content style={{ textAlign: "center" }}>
            <Text
              style={{ fontSize: "20px", textAlign: "center" }}
              colors={Colors.pink}
            >
              O Întâlnire a tinerilor
            </Text>
            <Title
              className="op1 big-text"
              style={{ marginTop: "2rem", textAlign: "center" }}
              colors={Colors.gray}
            >
              De ce creștinismul?
            </Title>
            <br />
            <div style={{ textAlign: "center" }}>
              <iframe
                id=""
                allowTransparency={true}
                allowFullScreen={true}
                allow="geolocation; microphone; camera"
                src="https://my.forms.app/form/6161a32ddd6c0533ec15739e"
                frameBorder={0}
                style={{
                  width: "1px",
                  minWidth: "100%",
                  height: "800px",
                  border: "none;",
                }}
              ></iframe>
            </div>
            <br />
          </Content>
        </Row>
      </Containe>
    </Fragment>
  )
}

export default Introduction
