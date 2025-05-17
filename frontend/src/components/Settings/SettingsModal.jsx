import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

function StatusIcon({ status }) {
  return status ? (
    <div className="flex items-center text-green-600 text-sm gap-1">
      <CheckCircle size={16} /> Connected
    </div>
  ) : (
    <div className="flex items-center text-red-500 text-sm gap-1">
      <XCircle size={16} /> Not Connected
    </div>
  );
}

export default function SettingsModal({ open, onClose }) {
  const [typeformConnected, setTypeformConnected] = useState(false); // Initially not connected
  const [surveyMonkeyConnected, setSurveyMonkeyConnected] = useState(false); // Initially not connected
  const [googleSheetUrl, setGoogleSheetUrl] = useState("");

  const toggleTypeformConnection = () => {
    setTypeformConnected((prev) => !prev); // Toggle connection status
  };

  const toggleSurveyMonkeyConnection = () => {
    setSurveyMonkeyConnected((prev) => !prev); // Toggle connection status
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Settings</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <h2 className="font-semibold text-lg">Connect Your Feedback Sources</h2>

          {/* Typeform */}
          <div className="border rounded-xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Typeform</p>
                <p className="text-sm text-muted-foreground">Connect to fetch responses from your forms.</p>
              </div>
              <div className="text-right space-y-1">
                <StatusIcon status={typeformConnected} />
                <Button
                  variant={typeformConnected ? "destructive" : "outline"} // Red button for "Disconnect"
                  size="sm"
                  onClick={toggleTypeformConnection} // Toggle connection
                >
                  {typeformConnected ? "Disconnect" : "Connect"} 
                </Button>
              </div>
            </div>
          </div>

          {/* SurveyMonkey */}
          <div className="border rounded-xl p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">SurveyMonkey</p>
                <p className="text-sm text-muted-foreground">Securely fetch responses from your surveys.</p>
              </div>
              <div className="text-right space-y-1">
                <StatusIcon status={surveyMonkeyConnected} />
                <Button
                  variant={surveyMonkeyConnected ? "destructive" : "outline"} // Red button for "Disconnect"
                  size="sm"
                  onClick={toggleSurveyMonkeyConnection} // Toggle connection
                >
                  {surveyMonkeyConnected ? "Disconnect" : "Connect"} 
                </Button>
              </div>
            </div>
          </div>

          {/* Google Forms */}
          <div className="border rounded-xl p-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium">Google Forms (via Google)</p>
              <p className="text-sm text-muted-foreground">
                Paste the Google Sheet linked to your form responses.
              </p>
              <Input
                placeholder="Paste Google Sheet URL"
                value={googleSheetUrl}
                onChange={(e) => setGoogleSheetUrl(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Make sure the sheet is shared with: <br />
                <code className="bg-muted px-1 rounded text-xs">bot@yourproject.iam.gserviceaccount.com</code>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}