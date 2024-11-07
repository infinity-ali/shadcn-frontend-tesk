import { useState } from "react";
import {
  Bell,
  ChevronRight,
  Globe,
  Home,
  Link,
  Lock,
  MessageCircle,
  Monitor,
  PaintBucket,
  Settings,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import React from "react";

const NotificationsSection = ({ state: [notifications, setNotifications] }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="push-notifications">Push Notifications</Label>
      <Switch
        id="push-notifications"
        checked={notifications.push}
        onCheckedChange={(checked) =>
          setNotifications({ ...notifications, push: checked })
        }
      />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="email-notifications">Email Notifications</Label>
      <Switch
        id="email-notifications"
        checked={notifications.email}
        onCheckedChange={(checked) =>
          setNotifications({ ...notifications, email: checked })
        }
      />
    </div>
  </div>
);

const NavigationSection = ({ state: [navigation, setNavigation] }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="sidebar">Show Sidebar</Label>
      <Switch
        id="sidebar"
        checked={navigation.sidebar}
        onCheckedChange={(checked) =>
          setNavigation({ ...navigation, sidebar: checked })
        }
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="menu-items">Number of Menu Items</Label>
      <Slider
        id="menu-items"
        min={3}
        max={10}
        step={1}
        value={[navigation.menuItems]}
        onValueChange={([value]) =>
          setNavigation({ ...navigation, menuItems: value })
        }
      />
    </div>
  </div>
);

const AppearanceSection = ({ state: [appearance, setAppearance] }) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="theme">Theme</Label>
      <Select
        value={appearance.theme}
        onValueChange={(value) =>
          setAppearance({ ...appearance, theme: value })
        }
      >
        <SelectTrigger id="theme">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="font-size">Font Size</Label>
      <Slider
        id="font-size"
        min={12}
        max={24}
        step={1}
        value={[appearance.fontSize]}
        onValueChange={([value]) =>
          setAppearance({ ...appearance, fontSize: value })
        }
      />
    </div>
  </div>
);

const MessagesMediaSection = ({ state: [messagesMedia, setMessagesMedia] }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="auto-play-videos">Auto-play Videos</Label>
      <Switch
        id="auto-play-videos"
        checked={messagesMedia.autoPlayVideos}
        onCheckedChange={(checked) =>
          setMessagesMedia({ ...messagesMedia, autoPlayVideos: checked })
        }
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="media-quality">Media Quality</Label>
      <Select
        value={messagesMedia.mediaQuality}
        onValueChange={(value) =>
          setMessagesMedia({ ...messagesMedia, mediaQuality: value })
        }
      >
        <SelectTrigger id="media-quality">
          <SelectValue placeholder="Select media quality" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
);

const LanguageRegionSection = ({
  state: [languageRegion, setLanguageRegion],
}) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="language">Language</Label>
      <Select
        value={languageRegion.language}
        onValueChange={(value) =>
          setLanguageRegion({ ...languageRegion, language: value })
        }
      >
        <SelectTrigger id="language">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Español</SelectItem>
          <SelectItem value="fr">Français</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="region">Region</Label>
      <Select
        value={languageRegion.region}
        onValueChange={(value) =>
          setLanguageRegion({ ...languageRegion, region: value })
        }
      >
        <SelectTrigger id="region">
          <SelectValue placeholder="Select region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="eu">Europe</SelectItem>
          <SelectItem value="asia">Asia</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
);

const AccessibilitySection = ({ state: [accessibility, setAccessibility] }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="high-contrast">High Contrast</Label>
      <Switch
        id="high-contrast"
        checked={accessibility.highContrast}
        onCheckedChange={(checked) =>
          setAccessibility({ ...accessibility, highContrast: checked })
        }
      />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="screen-reader">Screen Reader Optimization</Label>
      <Switch
        id="screen-reader"
        checked={accessibility.screenReader}
        onCheckedChange={(checked) =>
          setAccessibility({ ...accessibility, screenReader: checked })
        }
      />
    </div>
  </div>
);

const AudioVideoSection = ({ state: [audioVideo, setAudioVideo] }) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="audio-output">Audio Output</Label>
      <Select
        value={audioVideo.audioOutput}
        onValueChange={(value) =>
          setAudioVideo({ ...audioVideo, audioOutput: value })
        }
      >
        <SelectTrigger id="audio-output">
          <SelectValue placeholder="Select audio output" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="speakers">Speakers</SelectItem>
          <SelectItem value="headphones">Headphones</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="video-quality">Video Quality</Label>
      <Select
        value={audioVideo.videoQuality}
        onValueChange={(value) =>
          setAudioVideo({ ...audioVideo, videoQuality: value })
        }
      >
        <SelectTrigger id="video-quality">
          <SelectValue placeholder="Select video quality" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="480p">480p</SelectItem>
          <SelectItem value="720p">720p</SelectItem>
          <SelectItem value="1080p">1080p</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
);

const ConnectedAccountsSection = ({
  state: [connectedAccounts, setConnectedAccounts],
}) => (
  <div className="space-y-4">
    {Object.entries(connectedAccounts).map(([account, isConnected]) => (
      <div key={account} className="flex items-center justify-between">
        <Label htmlFor={account}>
          {account.charAt(0).toUpperCase() + account.slice(1)}
        </Label>
        <Switch
          id={account}
          checked={isConnected}
          onCheckedChange={(checked) =>
            setConnectedAccounts({ ...connectedAccounts, [account]: checked })
          }
        />
      </div>
    ))}
  </div>
);

const PrivacyVisibilitySection = ({
  state: [privacyVisibility, setPrivacyVisibility],
}) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="profile-visibility">Profile Visibility</Label>
      <Select
        value={privacyVisibility.profileVisibility}
        onValueChange={(value) =>
          setPrivacyVisibility({
            ...privacyVisibility,
            profileVisibility: value,
          })
        }
      >
        <SelectTrigger id="profile-visibility">
          <SelectValue placeholder="Select profile visibility" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="public">Public</SelectItem>
          <SelectItem value="friends">Friends Only</SelectItem>
          <SelectItem value="private">Private</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="activity-status">Show Activity Status</Label>
      <Switch
        id="activity-status"
        checked={privacyVisibility.showActivityStatus}
        onCheckedChange={(checked) =>
          setPrivacyVisibility({
            ...privacyVisibility,
            showActivityStatus: checked,
          })
        }
      />
    </div>
  </div>
);

const AdvancedSection = ({ state: [advanced, setAdvanced] }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="developer-mode">Developer Mode</Label>
      <Switch
        id="developer-mode"
        checked={advanced.developerMode}
        onCheckedChange={(checked) =>
          setAdvanced({ ...advanced, developerMode: checked })
        }
      />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="beta-features">Beta Features</Label>
      <Switch
        id="beta-features"
        checked={advanced.betaFeatures}
        onCheckedChange={(checked) =>
          setAdvanced({ ...advanced, betaFeatures: checked })
        }
      />
    </div>
  </div>
);

export default function Component() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Messages & media");

  // Add this to your menuItems array in the main settings modal

  const menuItems = [
    {
      icon: Bell,
      label: "Notifications",
      component: NotificationsSection,
      state: useState({ push: true, email: false }),
    },
    {
      icon: Settings,
      label: "Navigation",
      component: NavigationSection,
      state: useState({ sidebar: true, menuItems: 5 }),
    },
    { icon: Home, label: "Home", component: null, state: useState(null) },
    {
      icon: PaintBucket,
      label: "Appearance",
      component: AppearanceSection,
      state: useState({ theme: "light", fontSize: 16 }),
    },
    {
      icon: MessageCircle,
      label: "Messages & media",
      component: MessagesMediaSection,
      state: useState({ autoPlayVideos: true, mediaQuality: "medium" }),
    },
    {
      icon: Globe,
      label: "Language & region",
      component: LanguageRegionSection,
      state: useState({ language: "en", region: "us" }),
    },
    {
      icon: Monitor,
      label: "Accessibility",
      component: AccessibilitySection,
      state: useState({ highContrast: false, screenReader: false }),
    },
    {
      icon: ChevronRight,
      label: "Mark as read",
      component: null,
      state: useState(null),
    },
    {
      icon: Video,
      label: "Audio & video",
      component: AudioVideoSection,
      state: useState({ audioOutput: "speakers", videoQuality: "720p" }),
    },
    {
      icon: Link,
      label: "Connected accounts",
      component: ConnectedAccountsSection,
      state: useState({ google: true, facebook: false, twitter: true }),
    },
    {
      icon: Lock,
      label: "Privacy & visibility",
      component: PrivacyVisibilitySection,
      state: useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      icon: Settings,
      label: "Advanced",
      component: AdvancedSection,
      state: useState({ developerMode: false, betaFeatures: true }),
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Settings</Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[80vh]">
        <div className="flex gap-6 h-full">
          <ScrollArea className="w-64 border-r pr-4">
            {menuItems.map(
              ({ icon: Icon, label, state: [isActive] }, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(label)}
                  className={cn(
                    "flex items-center gap-3 w-full p-2 rounded-lg text-sm mb-1 hover:bg-muted transition-colors",
                    activeSection === label && "bg-muted"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{label}</span>
                </button>
              )
            )}
          </ScrollArea>
          <ScrollArea className="flex-1">
            <div className="flex items-center justify-between w-full mb-3">
              <DialogTitle className="text-xl font-semibold">
                Settings{" "}
                {activeSection && (
                  <span className="text-muted-foreground">
                    {" "}
                    &gt; {activeSection}
                  </span>
                )}
              </DialogTitle>
            </div>
            <div className="pr-4">
              {menuItems.find((item) => item.label === activeSection)
                ?.component &&
                React.createElement(
                  menuItems?.find((item) => item.label === activeSection)
                    .component,
                  {
                    state: menuItems?.find(
                      (item) => item.label === activeSection
                    ).state,
                  }
                )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
