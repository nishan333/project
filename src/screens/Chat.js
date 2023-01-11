import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StreamChat } from "stream-chat";
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
  OverlayProvider,
  ChannelList,
} from "stream-chat-expo";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { API_KEY } from "@env";

// components
import Navigation from "../components/Navigation";
import { Text } from "react-native";

const Chats = () => {
  const client = StreamChat.getInstance(API_KEY);
  const [isReady, setIsReady] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "aashish",
          name: "Aashish Panthi",
          image: "https://getstream.io/random_svg/?id=user-id&name=User+Name",
        },
        client.devToken("aashish")
      );

      // create a channel
      const channel = client.channel("livestream", "ls2", {
        name: "Live streaming",
      });

      await channel.watch();

      setSelectedChannel(channel);

      setIsReady(true);
    };

    connectUser();
    return () => client.disconnectUser();
  }, []);

  const onChannelPressed = (channel) => {
    setChannelSelected(channel);
  };

  if (!isReady) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <OverlayProvider>
          <Chat client={client}>
            {selectedChannel ? (
              <Channel channel={selectedChannel}>
                <MessageList />
                <MessageInput />
                <Text
                  style={{
                    margin: 40,
                  }}
                ></Text>
              </Channel>
            ) : (
              <ChannelList onSelect={onChannelPressed} />
            )}
            <Navigation active="Chat" />
          </Chat>
        </OverlayProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Chats;
