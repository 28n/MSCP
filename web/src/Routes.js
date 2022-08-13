// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private, navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import SidebarLayout from './layouts/SidebarLayout/SidebarLayout'
import { useEffect } from 'react'

const Routes = () => {
  {/*const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser.isActive === false) {
      navigate(routes.notAuthenticated)
    }
  }, [])
*/}
  return (
    <Router>
      <Route path="/not-active" page={NotActivePage} name="notActive" />
      <Private unauthenticated="login">
        <Route path="/not-authenticated" page={NotAuthenticatedPage} name="notAuthenticated" />
      </Private>
      <Private unauthenticated="notAuthenticated" roles={['Supporter', 'Probe-Supporter', 'Supportleitung', 'Probe-Moderator', 'Entwickler', 'Administrator', 'Moderatorleitung', 'Operator', 'Moderator']}>
        <Set wrap={SidebarLayout}>
          <Route path="/acp-tags" page={ACPTagsPage} name="acpTags" />
          <Route path="/helprules/{side:String}" page={HelprulesPage} name="helprules" />
          <Route path="/acprules/{side:String}" page={AcprulesPage} name="acprules" />
          <Route path="/summary" page={SummaryPage} name="summary" />

          <Route path="/pricelist" page={PricelistPage} name="pricelist" />

          <Route path="/forms" page={FormsPage} name="forms" />

          <Route path="/bugreport" page={BugreportPage} name="bugreport" />
          <Route path="/changelogs" page={ChangelogsPage} name="changelogs" />
          <Route path="/message/{side:String}" page={MessagePage} name="message" />

          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
          <Route path="/credits" page={CreditsPage} name="credits" />

          <Route path="/vacationrequest" page={VacationrequestPage} name="vacationrequest" />
          <Route path="/assistance" page={AssistancePage} name="assistance" />
          {/* <Route path="/rules" page={RulesPage} name="rules" /> */}
          <Route path="/rules/{side:String}" page={RulesPage} name="rules" />
          <Private unauthenticated="dashboard" roles={['Supporter', 'Supportleitung', 'Entwickler', 'Administrator', 'Moderatorleitung', 'Operator']}>
            <Route path="/traineereview" page={TraineereviewPage} name="traineereview" />
            <Route path="/dismissedcases" page={DismissedcasesPage} name="dismissedcases" />
          </Private>
          <Private unauthenticated="dashboard" roles={['Supportleitung', 'Operator', 'Moderatorleitung', 'Administrator', 'Entwickler']}>

            <Route path="/admin-recent-comments" page={AdminRecentCommentsPage} name="adminRecentComments" />
            <Route path="/edit-infopanel/{id:Int}" page={EditInfopanelPage} name="editInfopanel" />
            <Route path="/admin-users" page={AdminUsersPage} name="adminUsers" />
            <Route path="/admin-news" page={AdminNewsPage} name="adminNews" />
            <Route path="/admin-forms" page={AdminFormsPage} name="adminForms" />
            <Route path="/admin-infopanels" page={AdminInfopanelsPage} name="adminInfopanels" />
            <Route path="/admin-user-profile/{id:Int}" page={AdminUserProfilePage} name="adminUserProfile" />
            <Route path="/admin-dashboard" page={AdminDashboardPage} name="adminDashboard" />

            <Route path="/admin-user-search" page={AdminUserSearchPage} name="adminUserSearch" />
          </Private>

          <Private unauthenticated="home" roles={'Entwickler'}>
            <Route path="/admin-developer-actions" page={AdminDeveloperActionsPage} name="adminDeveloperActions" />
            <Route path="/hosterinfo" page={HosterinfoPage} name="hosterinfo" />
            <Route path="/developer-todolist" page={DeveloperTodolistPage} name="developerTodolist" />
          </Private>
          <Route path="/setup" page={SetupPage} name="setup" />
        </Set>
      </Private>
      <Route path="/" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
