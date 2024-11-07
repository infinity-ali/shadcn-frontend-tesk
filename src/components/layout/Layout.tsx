import * as React from "react";
import {
  Search,
  Home,
  Inbox,
  FileText,
  Settings,
  HelpCircle,
  Menu,
  Star,
  UserPlus,
  Sparkles,
  Clock,
  ListTodo,
  BookOpen,
  Briefcase,
  User,
  LayoutList,
  CalendarDays,
  File,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProfileModal from "@/templates/modals/ProfileModal/ProfileModal";
import SettingModal from "@/templates/modals/SettingModal";

const MainScreen = () => (
  <div className="flex flex-row gap-2">
    <ProfileModal />
    <SettingModal />
  </div>
);

const OtherScreen = () => <div className="space-y-4">Hello</div>;

interface NavItem {
  title: string;
  icon: React.ElementType;
  href: string;
  component: unknown;
  variant?: "default" | "ghost";
  state: unknown;
}

export default function Component() {
  const [activeSection, setActiveSection] = React.useState("Home");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavigate = (href: string, title: string) => {
    setActiveSection(title);
    history.pushState({ urlPath: href }, "", href);
  };

  const mainNav: NavItem[] = [
    {
      title: "Search",
      icon: Search,
      href: "/search",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Notion AI",
      icon: Sparkles,
      href: "/ai",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Home",
      icon: Home,
      href: "/",
      component: <MainScreen />,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Inbox",
      icon: Inbox,
      href: "/inbox",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
  ];

  const privatePages: NavItem[] = [
    {
      title: "Getting Started",
      icon: FileText,
      href: "/getting-started",
      component: "",
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Meal Planner",
      icon: Clock,
      href: "/meal-planner",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Monthly Budget",
      icon: ListTodo,
      href: "/monthly-budget",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Reading List",
      icon: BookOpen,
      href: "/reading-list",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Job Application Tracker",
      icon: Briefcase,
      href: "/job-tracker",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Personal Website",
      icon: User,
      href: "/personal-website",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Project Planner",
      icon: LayoutList,
      href: "/project-planner",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Weekly To-do List",
      icon: ListTodo,
      href: "/weekly-todo",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
  ];

  const bottomNav: NavItem[] = [
    {
      title: "Calendar",
      icon: CalendarDays,
      href: "/calendar",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Templates",
      icon: File,
      href: "/templates",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Trash",
      icon: Trash2,
      href: "/trash",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Help",
      icon: HelpCircle,
      href: "/help",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
  ];

  const menuItems: NavItem[] = [
    {
      title: "Search",
      icon: Search,
      href: "/search",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Notion AI",
      icon: Sparkles,
      href: "/ai",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Home",
      icon: Home,
      href: "/",
      component: MainScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Inbox",
      icon: Inbox,
      href: "/inbox",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Calendar",
      icon: CalendarDays,
      href: "/calendar",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Templates",
      icon: File,
      href: "/templates",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Trash",
      icon: Trash2,
      href: "/trash",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Help",
      icon: HelpCircle,
      href: "/help",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Getting Started",
      icon: FileText,
      href: "/getting-started",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Meal Planner",
      icon: Clock,
      href: "/meal-planner",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Monthly Budget",
      icon: ListTodo,
      href: "/monthly-budget",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Reading List",
      icon: BookOpen,
      href: "/reading-list",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Job Application Tracker",
      icon: Briefcase,
      href: "/job-tracker",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Personal Website",
      icon: User,
      href: "/personal-website",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Project Planner",
      icon: LayoutList,
      href: "/project-planner",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Weekly To-do List",
      icon: ListTodo,
      href: "/weekly-todo",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed left-4 top-4 z-40"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 ">
        <div className="flex flex-col h-full bg-sidebar bg-gray-300 px-1 py-4">
          <div className="">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <User className="h-4 w-4" />
              <span>User Name</span>
            </Button>
          </div>
          <ScrollArea className="flex-1 bg-gray-300">
            <div className="space-y-2">
              <div className="px-2">
                {mainNav.map(({ title, href, icon: Icon }) => (
                  <button
                    key={href}
                    onClick={() => handleNavigate(href, title)}
                    className={cn(
                      "flex items-center gap-3 w-full p-2 rounded-lg text-sm mb-1 hover:bg-muted transition-colors",
                      activeSection === title && "bg-muted"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-normal">{title}</span>
                  </button>
                ))}
              </div>
              {/* <Separator /> */}
              <div>
                <h2 className="px-4 text-sm font-normal tracking-tight mb-2">
                  Private
                </h2>
                <div className="px-2 space-y-1">
                  {privatePages.map(({ title, href, icon: Icon }) => (
                    <button
                      key={href}
                      onClick={() => handleNavigate(href, title)}
                      className={cn(
                        "flex items-center gap-3 w-full p-2 rounded-lg text-sm mb-1 hover:bg-muted transition-colors",
                        activeSection === title && "bg-muted"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-normal">{title}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="px-2 text-lg font-semibold tracking-tight mb-2 h-[10px]"></h2>
                <div className="px-2 ">
                  {bottomNav.map(({ title, href, icon: Icon }) => (
                    <button
                      key={href}
                      onClick={() => handleNavigate(href, title)}
                      className={cn(
                        "flex items-center gap-3 w-full p-2 rounded-lg text-sm mb-1 hover:bg-muted transition-colors",
                        activeSection === title && "bg-muted"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-normal">{title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className=" mt-auto">
            {/* <Separator /> */}

            <Button variant="ghost" className="w-full justify-start gap-2">
              <UserPlus className="h-4 w-4" />
              <span>Invite members</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-4">
        <div className="mx-auto max-w-full">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-sm font-normal">Getting Started</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Clock className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Star className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="prose prose-invert h-screen flex justify-start">
            <div className="max-w-6xl">
              <div className="flex items-start justify-between w-full mb-3">
                <div className="text-sm font-normal">
                  Settings{" "}
                  {activeSection && (
                    <span className="text-muted-foreground text-sm font-normal">
                      {" "}
                      &gt; {activeSection}
                    </span>
                  )}
                </div>
              </div>
              <div className="pr-4">
                {menuItems?.find((item) => item.title === activeSection)
                  ?.component &&
                  React.createElement(
                    menuItems?.find((item) => item.title === activeSection)
                      .component,
                    {
                      state: menuItems?.find(
                        (item) => item.title === activeSection
                      ).state,
                    }
                  )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Sidebar() {
  const [activeSection, setActiveSection] = React.useState("Home");

  const handleNavigate = (href: string, title: string) => {
    setActiveSection(title);
    history.pushState({ urlPath: href }, "", href);
  };

  const mainNav: NavItem[] = [
    {
      title: "Search",
      icon: Search,
      href: "/search",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Notion AI",
      icon: Sparkles,
      href: "/ai",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Home",
      icon: Home,
      href: "/",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Inbox",
      icon: Inbox,
      href: "/inbox",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
  ];

  const privatePages: NavItem[] = [
    {
      title: "Getting Started",
      icon: FileText,
      href: "/getting-started",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Meal Planner",
      icon: Clock,
      href: "/meal-planner",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Monthly Budget",
      icon: ListTodo,
      href: "/monthly-budget",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Reading List",
      icon: BookOpen,
      href: "/reading-list",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Job Application Tracker",
      icon: Briefcase,
      href: "/job-tracker",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Personal Website",
      icon: User,
      href: "/personal-website",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Project Planner",
      icon: LayoutList,
      href: "/project-planner",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Weekly To-do List",
      icon: ListTodo,
      href: "/weekly-todo",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
  ];

  const bottomNav: NavItem[] = [
    {
      title: "Calendar",
      icon: CalendarDays,
      href: "/calendar",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Templates",
      icon: File,
      href: "/templates",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Trash",
      icon: Trash2,
      href: "/trash",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
    {
      title: "Help",
      icon: HelpCircle,
      href: "/help",
      component: OtherScreen,
      state: React.useState({
        profileVisibility: "friends",
        showActivityStatus: true,
      }),
    },
  ];

  return (
    <div className="flex flex-col h-full bg-sidebar border-r">
      <div className="px-4">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <User className="h-4 w-4" />
          <span>User Name</span>
        </Button>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-2">
          <div className="px-4">
            {mainNav.map(({ title, href, icon: Icon }) => (
              <button
                key={href}
                onClick={() => handleNavigate(href, title)}
                className={cn(
                  "flex items-center gap-3 w-full p-2 rounded-lg text-sm mb-1 hover:bg-muted transition-colors",
                  activeSection === title && "bg-muted"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="font-normal">{title}</span>
              </button>
            ))}
          </div>
          {/* <Separator /> */}
          <div>
            <h2 className="px-4 text-sm font-normal tracking-tight mb-2">
              Private
            </h2>
            <div className="px-4 space-y-1">
              {privatePages.map(({ title, href, icon: Icon }) => (
                <button
                  key={href}
                  onClick={() => handleNavigate(href, title)}
                  className={cn(
                    "flex items-center gap-3 w-full p-2 rounded-lg text-sm mb-1 hover:bg-muted transition-colors",
                    activeSection === title && "bg-muted"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-normal">{title}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="px-4 text-lg font-semibold tracking-tight mb-2 h-[10px]"></h2>
            <div className="px-4 space-y-1">
              {bottomNav.map(({ title, href, icon: Icon }) => (
                <button
                  key={href}
                  onClick={() => handleNavigate(href, title)}
                  className={cn(
                    "flex items-center gap-3 w-full p-2 rounded-lg text-sm mb-1 hover:bg-muted transition-colors",
                    activeSection === title && "bg-muted"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-normal">{title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="px-4 mt-auto">
        {/* <Separator /> */}

        <Button variant="ghost" className="w-full justify-start gap-2">
          <UserPlus className="h-4 w-4" />
          <span>Invite members</span>
        </Button>
      </div>
    </div>
  );
}
