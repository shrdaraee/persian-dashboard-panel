import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import MessagesBox from "./Component/MessagesBox";
import MessagesList from "./Component/MessagesList";
import { useStateContext } from "../../Helper/ContextProvider";

export default function MessagesPage() {
  const { Message } = useStateContext();
  const [messageid, setmessageid] = useState(2);

  const activemessage = (index) => {
    setmessageid(index);
  };

  const currentchat = Message.filter((item) => {
    return item.id == messageid;
  });

  return (
    <Layout>
      <div className="mt-6 mx-2">
        <div className="lg:flex">
          <MessagesBox currentchat={currentchat} />
          <div>
            <MessagesList
              Message={Message}
              activemessage={activemessage}
              messageid={messageid}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
