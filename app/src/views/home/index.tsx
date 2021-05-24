import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Button, Col, DatePicker, Input, Row, Select, Space } from "antd";
import Menu from "antd/lib/menu";
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "../../components/ConnectButton";
import { NumericInput } from "../../components/Input/numeric";
import { TOKENS } from "../../constants/token";
import { useNativeAccount } from "../../contexts/accounts";
import { useConnectionConfig } from "../../contexts/connection";
import { useMarkets } from "../../contexts/market";
import { formatNumber } from "../../utils/utils";

export const HomeView = () => {
  const { marketEmitter, midPriceInUSD } = useMarkets();
  const { tokenMap } = useConnectionConfig();
  const { account } = useNativeAccount();
  let token = "SOL";

  const balance = useMemo(
    () => formatNumber.format((account?.lamports || 0) / LAMPORTS_PER_SOL),
    [account]
  );

  const updateToken = (value: string) => {
    token = value
    console.log(token)
  }

  useEffect(() => {
    const refreshTotal = () => { };

    const dispose = marketEmitter.onMarket(() => {
      refreshTotal();
    });

    refreshTotal();

    return () => {
      dispose();
    };
  }, [marketEmitter, midPriceInUSD, tokenMap]);

  return (
    <Row gutter={[2, 2]} align="middle">
      <Col span={24}>
        <div id="logo">
          <img src="/logo.svg" alt="StreamFlow Finance logo" />
        </div>
        <div style={{ padding: 15 }}></div>
      </Col>
      <Col span={24} style={{ marginTop: 50 }}>
        <h3>Token</h3>
        <Select
          onSelect={updateToken}
          value={token}
          style={{ marginBottom: 20 }}
        >
          {TOKENS.map((token, key) => (
            <Select.Option value={token.name} key={key}>
              {token.name}
            </Select.Option>
          ))}
        </Select>
      </Col>
      <Col span={24}>
        <h3>Amount</h3>
        <NumericInput
          style={{ width: 100 }}
          onChange={(e: Number) => console.log('numeric input ' + e)}
        />
      </Col>
      <Col span={24}>
        <h3>Recipient Account</h3>
        <Input style={{ width: 300 }}></Input>
      </Col>
      <Col span={6}></Col>
      <Col span={6}>
        <h3>Start</h3>
        <DatePicker></DatePicker>
      </Col>
      <Col span={6}>
        <h3>End</h3>
        <DatePicker></DatePicker>
      </Col>
      <Col span={6}></Col>
    
      <Col span={24}>
        <ConnectButton style={{ width: 200, height: 50 }} />
      </Col>
      <Col span={24}>
        <div className="builton" />
      </Col>
    </Row>
  );
};
