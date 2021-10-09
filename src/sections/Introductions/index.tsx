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
              Conferința BBM!
            </Text>
            <Title
              className="op1 big-text"
              style={{ marginTop: "2rem", textAlign: "center" }}
              colors={Colors.gray}
            >
              Doctrine seculare.
            </Title>
            <Title
              className="medium-text"
              style={{ marginTop: "3rem", marginBottom: "3rem", opacity: 0.7 }}
              colors={Colors.light_gray}
            >
              Multe religii... Câți dumnezei?
            </Title>
            <br />
            <div style={{ textAlign: "center" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf077FSpA6V5HGMheyftjRaSE2KuRdw6YotghSIc5KH4lcj6w/viewform?embedded=true"
                width="640"
                height="800"
                frameBorder="0"
              >
                Loading…
              </iframe>
            </div>
            <br />
          </Content>
        </Row>
      </Containe>
    </Fragment>
  )
}

export default Introduction
