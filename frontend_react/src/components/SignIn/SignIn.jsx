import React from 'react';
import styles from './SignIn.module.css';

/**
 * PUBLIC_INTERFACE
 * SignIn component renders the static Sign In screen converted from static HTML/CSS.
 * - Preserves layout and styles via CSS Modules.
 * - Avoids hard-coded external assets or unused scripts.
 * - Provides semantic and accessible structure where possible.
 */
export default function SignIn() {
  // PUBLIC_INTERFACE
  // This layout follows the absolute-positioned design of the static screen.
  // No dynamic behavior from the original app.js is required; keyboard accessibility is native for buttons.
  return (
    <div className={`${styles.screen} ${styles.screenRoot}`} id="screen-sign-in-11-235" aria-label="Sign In Screen">
      {/* Status Bar */}
      <div className={styles.abs} style={{ left: 0, top: 0, width: 375, height: 44 }}>
        {/* Right symbols cluster (approximate) */}
        <div className={styles.abs} style={{ left: 293.5, top: 16.6, width: 68, height: 13 }}>
          {/* Battery */}
          <div className={styles.abs} style={{ left: 335, top: 17.16, width: 24.5, height: 11.5 }}>
            <div className={styles.abs} style={{ left: 0, top: 0, width: 24.5, height: 11.5, background: 'rgba(48,48,48,0.4)' }} />
            <div className={styles.abs} style={{ left: 23, top: 3.69, width: 1.5, height: 4, background: 'var(--color-000000)' }} />
            <div className={styles.abs} style={{ left: 2, top: 1.92, width: 18, height: 7.6667, background: 'var(--color-303030)', borderRadius: 1.6 }} />
          </div>
          {/* Cellular bars */}
          <div className={styles.abs} style={{ left: 0, top: 0.6, width: 17.1, height: 10.7 }}>
            <div className={styles.abs} style={{ left: 0, bottom: 0, width: 3, height: 4, background: 'var(--color-000000)', borderRadius: 1.2 }} />
            <div className={styles.abs} style={{ left: 4.8, bottom: 0, width: 3, height: 6, background: 'var(--color-000000)', borderRadius: 1.2 }} />
            <div className={styles.abs} style={{ left: 9.4, bottom: 0, width: 3, height: 8.3, background: 'var(--color-000000)', borderRadius: 1.2 }} />
            <div className={styles.abs} style={{ left: 14.1, bottom: 0, width: 3, height: 10.7, background: 'var(--color-000000)', borderRadius: 1.2 }} />
          </div>
          {/* Wi-Fi */}
          <div className={styles.abs} style={{ left: 22.1, top: 0.4, width: 15.4, height: 11.06 }}>
            <div className={styles.abs} style={{ left: 0, top: 0, width: '100%', height: 2, background: 'var(--color-000000)', opacity: 0.9 }} />
            <div className={styles.abs} style={{ left: 2.7, top: 3.83, width: 10.03, height: 2, background: 'var(--color-000000)', opacity: 0.9 }} />
            <div className={styles.abs} style={{ left: 5.37, top: 7.11, width: 4.66, height: 2, background: 'var(--color-000000)', opacity: 0.9 }} />
          </div>
        </div>
        {/* Time */}
        <div className={`${styles.abs} ${styles.time}`} style={{ left: 0, top: 12, width: 180, height: 22 }}>
          <div className={styles.text} style={{ position: 'absolute', left: 29.5, top: 2 }} aria-hidden>19:27</div>
        </div>
      </div>

      {/* Titles */}
      <div className={styles.abs} style={{ left: 30, top: 94, width: 155, height: 75 }}>
        <div className={`${styles.text} ${styles.titleHello}`} style={{ left: 0, top: 0, width: 155, height: 45 }}>Hello,</div>
        <div className={`${styles.text} ${styles.titleWelcome}`} style={{ left: 0, top: 45, width: 155, height: 30 }}>Welcome Back!</div>
      </div>

      {/* Email Field (visual as per static) */}
      <div className={`${styles.abs} ${styles.inputField}`} style={{ left: 30, top: 226, width: 315, height: 81 }}>
        <div className={`${styles.text} ${styles.inputLabel}`} style={{ left: 0, top: 0, width: 120, height: 21 }}>Email</div>
        <div className={styles.inputRect} style={{ left: 0, top: 26, width: 315, height: 55 }} aria-hidden />
        <div className={`${styles.text} ${styles.inputPlaceholder}`} style={{ left: 20, top: 45, width: 200, height: 17 }}>Enter Email</div>
      </div>

      {/* Password Field (visual as per static) */}
      <div className={`${styles.abs} ${styles.inputField}`} style={{ left: 30, top: 337, width: 315, height: 81 }}>
        <div className={`${styles.text} ${styles.inputLabel}`} style={{ left: 0, top: 0, width: 150, height: 21 }}>Enter Password</div>
        <div className={styles.inputRect} style={{ left: 0, top: 26, width: 315, height: 55 }} aria-hidden />
        <div className={`${styles.text} ${styles.inputPlaceholder}`} style={{ left: 20, top: 45, width: 200, height: 17 }}>Enter Password</div>
      </div>

      {/* Big Sign In Button */}
      <button
        type="button"
        className={`${styles.buttonReset} ${styles.bigButton} ${styles.abs}`}
        style={{ left: 30, top: 480, width: 315, height: 60 }}
        aria-label="Sign In"
      >
        <span className={styles.bigButtonLabel}>Sign In</span>
        <span className={styles.bigButtonIcon} aria-hidden />
      </button>

      {/* Forgot Password */}
      <div className={`${styles.abs} ${styles.forgot}`} style={{ left: 40, top: 538, width: 140, height: 17 }}>
        <div className={styles.forgotText}>Forgot Password?</div>
      </div>

      {/* Divider with text */}
      <div className={`${styles.abs} ${styles.lineGroup}`} style={{ left: 90, top: 660, width: 195, height: 17 }}>
        <div className="dividerLine" style={{ left: 0, top: 9, width: 50, height: 1 }} />
        <div className={`${styles.text} ${styles.dividerText}`} style={{ left: 57, top: 0, width: 81, height: 17 }}>Or Sign in With</div>
        <div className="dividerLine" style={{ left: 145, top: 9, width: 50, height: 1 }} />
      </div>

      {/* Social Buttons */}
      <button
        type="button"
        className={`${styles.buttonReset} ${styles.socialBtn} ${styles.google} ${styles.abs}`}
        aria-label="Sign in with Google"
        style={{ left: 131, top: 697, width: 44, height: 44 }}
      >
        <span className={styles.hiddenAccessible}>Google</span>
        <div className="googleG">
          <div className="gPiece gYellow" />
          <div className="gPiece gRed" />
          <div className="gPiece gGreen" />
          <div className="gPiece gBlue" />
        </div>
      </button>

      <button
        type="button"
        className={`${styles.buttonReset} ${styles.socialBtn} ${styles.facebook} ${styles.abs}`}
        aria-label="Sign in with Facebook"
        style={{ left: 200, top: 697, width: 44, height: 44 }}
      >
        <span className={styles.hiddenAccessible}>Facebook</span>
        <div className="fbIcon" />
      </button>

      {/* Sign up link (static text) */}
      <div className={`${styles.abs} ${styles.signupLink}`} style={{ left: 99, top: 796, width: 177, height: 17 }}>
        <div className={styles.signupText}>Don’t have an account? Sign up</div>
      </div>

      {/* Home Indicator */}
      <div className={`${styles.abs} ${styles.homeIndicator}`} style={{ left: 0, top: 782, width: 375, height: 34 }}>
        <div className="homeBar" />
      </div>
    </div>
  );
}
