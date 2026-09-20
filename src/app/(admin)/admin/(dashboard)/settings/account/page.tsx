import {SettingsAccountSetup} from "@/components/modules/admin";
import {getPermissionsListAction} from "@/actions";

type AccountPageProps = {
    searchParams: Promise<{
        section?: string;
    }>;
};

async function AccountPage({searchParams}: AccountPageProps) {
    const params = await searchParams;

    const section = params.section || "profile";

    let permissions = [];

    if (section === "roles") {
        const response = await getPermissionsListAction();

        permissions = response?.data ?? [];
    }

    return (
        <SettingsAccountSetup
            section={section}
            permissions={permissions}
        />
    );
}

export default AccountPage;